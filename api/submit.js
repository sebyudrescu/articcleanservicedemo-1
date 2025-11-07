const buildFieldMap = () => ({
  Nome: process.env.AIRTABLE_FIELD_NOME || 'Nome',
  Cognome: process.env.AIRTABLE_FIELD_COGNOME || 'Cognome',
  Email: process.env.AIRTABLE_FIELD_EMAIL || 'Email',
  'Numero di Telefono': process.env.AIRTABLE_FIELD_TELEFONO || 'Numero di Telefono',
  'Nome Azienda': process.env.AIRTABLE_FIELD_NOME_AZIENDA || 'Nome Azienda'
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let data = {};
    if (req.headers['content-type']?.includes('application/json')) {
      data = req.body || {};
    } else {
      const raw = await new Promise((resolve, reject) => {
        let buf = '';
        req.on('data', (c) => (buf += c));
        req.on('end', () => resolve(buf));
        req.on('error', reject);
      });
      data = Object.fromEntries(new URLSearchParams(raw));
    }

    if (data.website) return res.status(200).json({ ok: true });

    const fieldMap = buildFieldMap();
    const requiredFields = ['Nome', 'Cognome', 'Email', 'Numero di Telefono'];

    const normalisedValues = Object.fromEntries(
      Object.keys(fieldMap).map((key) => {
        const value = typeof data[key] === 'string' ? data[key].trim() : '';
        return [key, value];
      })
    );

    const missingFields = requiredFields.filter((key) => !normalisedValues[key]);
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: 'Missing required fields',
        missing: missingFields
      });
    }

    const fields = {};
    Object.entries(fieldMap).forEach(([formKey, airtableKey]) => {
      const value = normalisedValues[formKey];
      if (value) {
        fields[airtableKey] = value;
      }
    });

    const baseId = process.env.AIRTABLE_BASE_ID;
    const table = process.env.AIRTABLE_TABLE;
    const pat = process.env.AIRTABLE_PAT;

    if (!baseId || !table || !pat) {
      return res.status(500).json({
        error: 'Airtable credentials missing',
        hint: 'Imposta AIRTABLE_BASE_ID, AIRTABLE_TABLE e AIRTABLE_PAT'
      });
    }

    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`;
    const useFieldIds = process.env.AIRTABLE_USE_FIELD_IDS === 'true';
    const payload = { records: [{ fields }] };
    const atRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${pat}`,
        'Content-Type': 'application/json',
        ...(useFieldIds ? { 'X-Airtable-Use-Field-Ids': 'true' } : {})
      },
      body: JSON.stringify(payload)
    });

    if (!atRes.ok) {
      const text = await atRes.text();
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = null;
      }

      console.error('Airtable error:', {
        base: baseId,
        table,
        useFieldIds,
        fieldMapUsed: fieldMap,
        fieldsSent: Object.keys(fields),
        response: parsed ?? text
      });

      const isFieldMismatch =
        atRes.status === 422 ||
        parsed?.error?.type === 'UNKNOWN_FIELD_NAME';

      if (isFieldMismatch) {
        return res.status(422).json({
          error: 'Airtable field mismatch',
          hint: 'Controlla AIRTABLE_TABLE e i valori AIRTABLE_FIELD_*',
          table,
          base: baseId,
          fieldsUsed: fieldMap
        });
      }

      return res.status(500).json({
        error: 'Airtable request failed',
        detail: parsed ?? text,
        table,
        base: baseId,
        fieldsSent: Object.keys(fields)
      });
    }

    const redirect = process.env.REDIRECT_URL;
    if (redirect && !req.headers['x-requested-with']) {
      res.writeHead(303, { Location: redirect });
      return res.end();
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Errore interno' });
  }
}
