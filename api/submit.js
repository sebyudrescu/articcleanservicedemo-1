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
      nome: 'Nome',
      cognome: 'Cognome',
      nomeAzienda: 'Nome Azienda',
      email: 'Email',
      telefono: 'Numero di Telefono',
      superficie: 'Superficie in m²',
      tipoServizio: 'Tipo di Servizio',
      frequenza: 'Frequenza',
      azienda: 'Azienda',
      indirizzo: 'Indirizzo',
      messaggio: 'Messaggio'
    };

    const fields = {};
    for (const key in FIELD_MAP) {
      if (data[key] && data[key].trim() !== '') {
        fields[FIELD_MAP[key]] = data[key].trim();
      }
    }

    if (!fields['Nome'] || !fields['Email']) {
      return res.status(400).json({ error: 'Nome ed Email sono obbligatori.' });
    }

    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE)}`;
    const atRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ records: [{ fields }] })
    });

    if (!atRes.ok) {
      const text = await atRes.text();
      console.error('Airtable error:', text);
      return res.status(500).json({ error: 'Errore Airtable', detail: text });
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
