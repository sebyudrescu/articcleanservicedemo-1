import gestioneCarrelatiFile from '../../immagini-servizi/gestione carrelati.jpg';
import pulizieCondominialiFile from '../../immagini-servizi/pulizie-condominiali.jpg';
import pulizieIndustrialiFile from '../../immagini-servizi/pulizie industriali.jpg';
import puliziePostCantiereFile from '../../immagini-servizi/pulizie post cantiere.jpg';
import pulizieUfficiFile from '../../immagini-servizi/pulizie-ufficii.webp';
import pulizieVetriFile from '../../immagini-servizi/pulizie vetri.jpg';

export const gestioneCarrellatiImage = gestioneCarrelatiFile;
export const pulizieCondominialiImage = pulizieCondominialiFile;
export const pulizieIndustrialiImage = pulizieIndustrialiFile;
export const puliziePostCantiereImage = puliziePostCantiereFile;
export const pulizieUfficiImage = pulizieUfficiFile;
export const pulizieVetriImage = pulizieVetriFile;

export const serviceImagesBySlug: Record<string, string> = {
  'pulizie-uffici': pulizieUfficiImage,
  'pulizie-industriali': pulizieIndustrialiImage,
  'pulizie-post-cantiere': puliziePostCantiereImage,
  'pulizie-vetri': pulizieVetriImage,
  'pulizie-condomini': pulizieCondominialiImage,
  'gestione-carrellati': gestioneCarrellatiImage
};

export const serviceImagesById: Record<string, string> = {
  uffici: pulizieUfficiImage,
  industriale: pulizieIndustrialiImage,
  'post-cantiere': puliziePostCantiereImage,
  vetri: pulizieVetriImage,
  condomini: pulizieCondominialiImage,
  carrellati: gestioneCarrellatiImage
};

export const serviceImagesByLink: Record<string, string> = {
  '/servizi/pulizie-uffici': pulizieUfficiImage,
  '/servizi/pulizie-industriali': pulizieIndustrialiImage,
  '/servizi/pulizie-post-cantiere': puliziePostCantiereImage,
  '/servizi/pulizie-vetri': pulizieVetriImage,
  '/servizi/pulizie-condomini': pulizieCondominialiImage,
  '/servizi/gestione-carrellati': gestioneCarrellatiImage
};
