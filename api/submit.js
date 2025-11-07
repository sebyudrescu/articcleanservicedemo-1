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

    const FIELD_MAP = {
      nome: process.env.AIRTABLE_FIELD_NOME || 'Nome',
      email: process.env.AIRTABLE_FIELD_EMAIL || 'Email',
      telefono: process.env.AIRTABLE_FIELD_TELEFONO || 'Numero di Telefono',
      nomeAzienda: process.env.AIRTABLE_FIELD_NOME_AZIENDA || 'Nome Azienda'
    };

    const fields = {};
    (Object.keys(FIELD_MAP)).forEach((key) => {
      if (data[key] && data[key].trim() !== '') {
        fields[FIELD_MAP[key]] = data[key].trim();
      }
    });

    if (!fields[FIELD_MAP.nome] || !fields[FIELD_MAP.email]) {
      return res.status(400).json({ error: 'Nome ed Email sono obbligatori.' });
    }

    const baseId = process.env.AIRTABLE_BASE_ID;
    const table = process.env.AIRTABLE_TABLE;
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`;
    const useFieldIds = process.env.AIRTABLE_USE_FIELD_IDS === 'true';
    const payload = { records: [{ fields }] };
    const atRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
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

      const errorContext = {
        base: baseId,
        table,
        fieldMapUsed: FIELD_MAP,
        payload
      };
      console.error('Airtable error:', { ...errorContext, response: parsed ?? text });

      const isFieldMismatch =
        atRes.status === 422 ||
        parsed?.error?.type === 'UNKNOWN_FIELD_NAME';

      if (isFieldMismatch) {
        return res.status(422).json({
          error: 'Airtable field mismatch',
          hint: 'Controlla AIRTABLE_TABLE e i valori AIRTABLE_FIELD_*',
          table,
          base: baseId,
          fieldsUsed: FIELD_MAP
        });
      }

      return res.status(500).json({ error: 'Errore Airtable', detail: parsed ?? text });
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
