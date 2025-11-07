const buildFieldMap = () => ({
  nome: process.env.AIRTABLE_FIELD_NOME || 'Nome',
  email: process.env.AIRTABLE_FIELD_EMAIL || 'Email',
  telefono: process.env.AIRTABLE_FIELD_TELEFONO || 'Numero di Telefono',
  nomeAzienda: process.env.AIRTABLE_FIELD_NOME_AZIENDA || 'Nome Azienda'
});

export default function handler(_req, res) {
  res.status(200).json({
    baseId: process.env.AIRTABLE_BASE_ID || null,
    table: process.env.AIRTABLE_TABLE || null,
    useFieldIds: process.env.AIRTABLE_USE_FIELD_IDS === 'true',
    fieldMap: buildFieldMap()
  });
}
