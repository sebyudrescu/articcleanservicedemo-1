const basePath = '/images/optimized';
const sanificazioneHeroImage = 'https://images.pexels.com/photos/4099465/pexels-photo-4099465.jpeg?auto=compress&cs=tinysrgb&w=1280';
const giardinaggioHeroImage = 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1280';

export const gestioneCarrellatiImage = `${basePath}/gestione-carrelati-960.webp`;
export const gestioneCarrellatiImageSmall = `${basePath}/gestione-carrelati-640.webp`;
export const pulizieCondominialiImage = `${basePath}/pulizie-condominiali-960.webp`;
export const pulizieCondominialiImageSmall = `${basePath}/pulizie-condominiali-640.webp`;
export const pulizieIndustrialiImage = `${basePath}/pulizie-industriali-960.webp`;
export const pulizieIndustrialiImageSmall = `${basePath}/pulizie-industriali-640.webp`;
export const puliziePostCantiereImage = `${basePath}/pulizie-post-cantiere-960.webp`;
export const puliziePostCantiereImageSmall = `${basePath}/pulizie-post-cantiere-640.webp`;
export const pulizieUfficiImage = `${basePath}/pulizie-uffici-960.webp`;
export const pulizieUfficiImageSmall = `${basePath}/pulizie-uffici-640.webp`;
export const pulizieUfficiHeroImage = `${basePath}/pulizie-uffici-1600.webp`;
export const pulizieVetriImage = `${basePath}/pulizie-vetri-960.webp`;
export const pulizieVetriImageSmall = `${basePath}/pulizie-vetri-640.webp`;

export const serviceImageMeta = {
  uffici: {
    src: pulizieUfficiImage,
    srcSet: `${pulizieUfficiImageSmall} 640w, ${pulizieUfficiImage} 960w`,
    width: 960,
    height: 640
  },
  industriale: {
    src: pulizieIndustrialiImage,
    srcSet: `${pulizieIndustrialiImageSmall} 640w, ${pulizieIndustrialiImage} 960w`,
    width: 960,
    height: 598
  },
  'post-cantiere': {
    src: puliziePostCantiereImage,
    srcSet: `${puliziePostCantiereImageSmall} 640w, ${puliziePostCantiereImage} 960w`,
    width: 960,
    height: 816
  },
  vetri: {
    src: pulizieVetriImage,
    srcSet: `${pulizieVetriImageSmall} 640w, ${pulizieVetriImage} 870w`,
    width: 870,
    height: 500
  },
  condomini: {
    src: pulizieCondominialiImage,
    srcSet: `${pulizieCondominialiImageSmall} 640w, ${pulizieCondominialiImage} 750w`,
    width: 750,
    height: 420
  },
  carrellati: {
    src: gestioneCarrellatiImage,
    srcSet: `${gestioneCarrellatiImageSmall} 640w, ${gestioneCarrellatiImage} 960w`,
    width: 960,
    height: 540
  }
} as const;

export const serviceImagesBySlug: Record<string, string> = {
  'pulizie-uffici': serviceImageMeta.uffici.src,
  'pulizie-industriali': serviceImageMeta.industriale.src,
  'pulizie-post-cantiere': serviceImageMeta['post-cantiere'].src,
  'pulizia-vetri': serviceImageMeta.vetri.src,
  'pulizie-vetri': serviceImageMeta.vetri.src,
  'pulizie-condomini': serviceImageMeta.condomini.src,
  'gestione-carrellati': serviceImageMeta.carrellati.src,
  'sanificazione-ambienti': sanificazioneHeroImage,
  giardinaggio: giardinaggioHeroImage
};

export const serviceImagesById: Record<string, string> = {
  uffici: serviceImageMeta.uffici.src,
  industriale: serviceImageMeta.industriale.src,
  'post-cantiere': serviceImageMeta['post-cantiere'].src,
  vetri: serviceImageMeta.vetri.src,
  condomini: serviceImageMeta.condomini.src,
  carrellati: serviceImageMeta.carrellati.src
};

export const serviceImagesByLink: Record<string, string> = {
  '/servizi/pulizie-uffici': serviceImageMeta.uffici.src,
  '/servizi/pulizie-industriali': serviceImageMeta.industriale.src,
  '/servizi/pulizie-post-cantiere': serviceImageMeta['post-cantiere'].src,
  '/servizi/pulizie-vetri': serviceImageMeta.vetri.src,
  '/servizi/pulizie-condomini': serviceImageMeta.condomini.src,
  '/servizi/gestione-carrellati': serviceImageMeta.carrellati.src
};
