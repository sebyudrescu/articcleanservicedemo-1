export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  features: string[];
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  province: string;
  area?: string;
}

export const services: Service[] = [
  {
    id: 'pulizie-uffici',
    name: 'Pulizie Uffici',
    slug: 'pulizie-uffici',
    icon: 'Building2',
    shortDescription: 'Impresa di pulizie per uffici nel centro di Brescia, studi e spazi aziendali',
    features: [
      'Pulizia quotidiana postazioni di lavoro',
      'Sanificazione bagni e aree comuni',
      'Pulizia vetri interni ed esterni',
      'Gestione rifiuti e raccolta differenziata',
      'Aspirazione tappeti e moquette',
      'Pulizia sale riunioni e aree break',
      'Report digitali dedicati per uffici a Brescia centro'
    ]
  },
  {
    id: 'pulizie-condomini',
    name: 'Pulizie Condomini',
    slug: 'pulizie-condomini',
    icon: 'Home',
    shortDescription: 'Manutenzione e pulizia professionale di spazi condominiali',
    features: [
      'Pulizia scale e pianerottoli',
      'Lavaggio androni e ingressi',
      'Pulizia ascensori',
      'Manutenzione cortili e aree comuni',
      'Gestione raccolta differenziata',
      'Pulizia cantine e garage'
    ]
  },
  {
    id: 'pulizie-industriali',
    name: 'Pulizie Industriali',
    slug: 'pulizie-industriali',
    icon: 'Factory',
    shortDescription: 'Servizi specializzati per capannoni industriali e aree produttive con sanificazione ambienti aziendali',
    features: [
      'Pulizia capannoni e aree produttive',
      'Lavaggio pavimenti industriali',
      'Pulizia macchinari e impianti',
      'Rimozione polveri e residui industriali',
      'Sanificazione spogliatoi e servizi',
      'Gestione rifiuti industriali',
      'Piani certificati di sanificazione ambienti aziendali'
    ]
  },
  {
    id: 'pulizie-post-cantiere',
    name: 'Pulizie Post Cantiere',
    slug: 'pulizie-post-cantiere',
    icon: 'HardHat',
    shortDescription: 'Pulizia finale dopo lavori di costruzione e ristrutturazione con team per cantieri industriali',
    features: [
      'Rimozione detriti e materiali residui',
      'Pulizia profonda pavimenti e superfici',
      'Lavaggio vetri e infissi',
      'Aspirazione polveri da cantiere',
      'Pulizia finale pre-consegna',
      'Sanificazione completa ambienti',
      'Pulizie post cantiere industriale con macchinari dedicati'
    ]
  },
  {
    id: 'sanificazione-ambienti',
    name: 'Sanificazione Ambienti',
    slug: 'sanificazione-ambienti',
    icon: 'Shield',
    shortDescription: 'Sanificazione ambienti aziendali professionale con prodotti certificati e sicuri',
    features: [
      'Sanificazione con prodotti certificati',
      'Disinfezione profonda superfici',
      'Trattamenti antibatterici',
      'Sanificazione aria condizionata',
      'Certificazione intervento eseguito',
      'Protocolli anti COVID-19',
      'Monitoraggio con registri digitali condivisi'
    ]
  },
  {
    id: 'pulizia-vetri',
    name: 'Pulizia Vetri',
    slug: 'pulizia-vetri',
    icon: 'Square',
    shortDescription: 'Lavaggio professionale vetrate per edifici e uffici',
    features: [
      'Pulizia vetri interni ed esterni',
      'Lavaggio vetrate grandi superfici',
      'Pulizia in altezza con attrezzature specifiche',
      'Rimozione macchie e aloni',
      'Pulizia cornici e infissi',
      'Interventi programmati periodici'
    ]
  },
  {
    id: 'gestione-carrellati',
    name: 'Gestione Carrellati',
    slug: 'gestione-carrellati',
    icon: 'Trash2',
    shortDescription: 'Gestione professionale bidoni per raccolta differenziata',
    features: [
      'Gestione bidoni raccolta differenziata',
      'Posizionamento e ritiro carrellati',
      'Pulizia e sanificazione contenitori',
      'Coordinamento con servizio comunale',
      'Rispetto calendario raccolta',
      'Segnalazione problematiche'
    ]
  },
  {
    id: 'giardinaggio',
    name: 'Giardinaggio',
    slug: 'giardinaggio',
    icon: 'TreeDeciduous',
    shortDescription: 'Cura e manutenzione professionale del verde',
    features: [
      'Taglio erba e sfalcio prati',
      'Potatura alberi e siepi',
      'Manutenzione aiuole e bordure',
      'Pulizia giardini e aree verdi',
      'Piantumazione e sistemazione verde',
      'Irrigazione e concimazione'
    ]
  }
];

export const locations: Location[] = [
  {
    id: 'brescia',
    name: 'Brescia',
    slug: 'brescia',
    province: 'Brescia',
    area: 'centro città'
  },
  {
    id: 'desenzano-del-garda',
    name: 'Desenzano del Garda',
    slug: 'desenzano-del-garda',
    province: 'Brescia',
    area: 'Lago di Garda'
  },
  {
    id: 'montichiari',
    name: 'Montichiari',
    slug: 'montichiari',
    province: 'Brescia',
    area: 'bassa bresciana'
  },
  {
    id: 'ghedi',
    name: 'Ghedi',
    slug: 'ghedi',
    province: 'Brescia',
    area: 'bassa bresciana'
  },
  {
    id: 'chiari',
    name: 'Chiari',
    slug: 'chiari',
    province: 'Brescia',
    area: 'Franciacorta'
  },
  {
    id: 'rovato',
    name: 'Rovato',
    slug: 'rovato',
    province: 'Brescia',
    area: 'Franciacorta'
  },
  {
    id: 'rezzato',
    name: 'Rezzato',
    slug: 'rezzato',
    province: 'Brescia',
    area: 'prima cintura'
  },
  {
    id: 'lonato-del-garda',
    name: 'Lonato del Garda',
    slug: 'lonato-del-garda',
    province: 'Brescia',
    area: 'Lago di Garda'
  },
  {
    id: 'palazzolo-oglio',
    name: 'Palazzolo sull\'Oglio',
    slug: 'palazzolo-oglio',
    province: 'Brescia',
    area: 'bassa bresciana orientale'
  },
  {
    id: 'salo',
    name: 'Salò',
    slug: 'salo',
    province: 'Brescia',
    area: 'Lago di Garda occidentale'
  },
  {
    id: 'castenedolo',
    name: 'Castenedolo',
    slug: 'castenedolo',
    province: 'Brescia',
    area: 'zona sud Brescia'
  },
  {
    id: 'sarezzo',
    name: 'Sarezzo',
    slug: 'sarezzo',
    province: 'Brescia',
    area: 'Val Trompia'
  },
  {
    id: 'orzinuovi',
    name: 'Orzinuovi',
    slug: 'orzinuovi',
    province: 'Brescia',
    area: 'bassa bresciana centrale'
  },
  {
    id: 'concesio',
    name: 'Concesio',
    slug: 'concesio',
    province: 'Brescia',
    area: 'Val Trompia sud'
  },
  {
    id: 'travagliato',
    name: 'Travagliato',
    slug: 'travagliato',
    province: 'Brescia',
    area: 'bassa bresciana ovest'
  }
];
