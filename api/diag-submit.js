const buildFieldMap = () => ({
  Nome: process.env.AIRTABLE_FIELD_NOME || 'Nome',
  Cognome: process.env.AIRTABLE_FIELD_COGNOME || 'Cognome',
  Email: process.env.AIRTABLE_FIELD_EMAIL || 'Email',
  'Numero di Telefono': process.env.AIRTABLE_FIELD_TELEFONO || 'Numero di Telefono',
  'Nome Azienda': process.env.AIRTABLE_FIELD_NOME_AZIENDA || 'Nome Azienda'
});

export default function handler(_req, res) {
  res.status(200).json({
    baseId: process.env.AIRTABLE_BASE_ID || null,
    table: process.env.AIRTABLE_TABLE || null,
    useFieldIds: process.env.AIRTABLE_USE_FIELD_IDS === 'true',
    fieldMap: buildFieldMap()
  });
}
