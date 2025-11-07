const buildFieldMap = () => ({
  Nome: process.env.AIRTABLE_FIELD_NOME || 'Nome',
  Cognome: process.env.AIRTABLE_FIELD_COGNOME || 'Cognome',
  Email: process.env.AIRTABLE_FIELD_EMAIL || 'Email',
  'Numero di Telefono': process.env.AIRTABLE_FIELD_TELEFONO || 'Numero di Telefono',
  'Nome Azienda': process.env.AIRTABLE_FIELD_NOME_AZIENDA || 'Nome Azienda'
});

export default function handler(_req, res) {
  res.status(200).json({
    fieldMap: buildFieldMap()
  });
}
