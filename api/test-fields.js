export default async function handler(req, res) {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_TABLE;
  const pat = process.env.AIRTABLE_PAT;

  if (!baseId || !table || !pat) {
    return res.status(500).json({
      error: 'Missing Airtable credentials',
      hint: 'Set AIRTABLE_BASE_ID, AIRTABLE_TABLE e AIRTABLE_PAT'
    });
  }

  try {
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}?maxRecords=1`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${pat}`
      }
    });

    const data = await response.json();

    return res.status(200).json({
      availableFields: data.records?.[0]?.fields ? Object.keys(data.records[0].fields) : [],
      fullResponse: data
    });
  } catch (error) {
    console.error('Airtable test-fields error:', error);
    return res.status(500).json({ error: 'Errore durante la lettura dei campi Airtable' });
  }
}
