import { type ComponentType, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const isServer = import.meta.env.SSR;

type PageComponent = ComponentType<Record<string, unknown>>;

let Homepage: PageComponent;
let ChiSiamo: PageComponent;
let ComeLavoriamo: PageComponent;
let Recensioni: PageComponent;
let Servizi: PageComponent;
let DoveOperiamo: PageComponent;
let PulizieUffici: PageComponent;
let PulizieCondomini: PageComponent;
let PulizieIndustriali: PageComponent;
let PuliziePostCantiere: PageComponent;
let PulizieVetri: PageComponent;
let SanificazioneAmbienti: PageComponent;
let Giardinaggio: PageComponent;
let GestioneCarrellati: PageComponent;
let RichidiPreventivo: PageComponent;
let ServizioLocaleDynamic: PageComponent;
let Blog: PageComponent;
let BlogPost: PageComponent;
let FAQ: PageComponent;
let PrivacyPolicy: PageComponent;

if (isServer) {
  Homepage = (await import('./pages/Homepage')).default;
  ChiSiamo = (await import('./pages/ChiSiamo')).default;
  ComeLavoriamo = (await import('./pages/ComeLavoriamo')).default;
  Recensioni = (await import('./pages/Recensioni')).default;
  Servizi = (await import('./pages/Servizi')).default;
  DoveOperiamo = (await import('./pages/DoveOperiamo')).default;
  PulizieUffici = (await import('./pages/servizi/PulizieUffici')).default;
  PulizieCondomini = (await import('./pages/servizi/PulizieCondomini')).default;
  PulizieIndustriali = (await import('./pages/servizi/PulizieIndustriali')).default;
  PuliziePostCantiere = (await import('./pages/servizi/PuliziePostCantiere')).default;
  PulizieVetri = (await import('./pages/servizi/PulizieVetri')).default;
  SanificazioneAmbienti = (await import('./pages/servizi/SanificazioneAmbienti')).default;
  Giardinaggio = (await import('./pages/servizi/Giardinaggio')).default;
  GestioneCarrellati = (await import('./pages/servizi/GestioneCarrellati')).default;
  RichidiPreventivo = (await import('./pages/RichidiPreventivo')).default;
  ServizioLocaleDynamic = (await import('./pages/ServizioLocaleDynamic')).default;
  Blog = (await import('./pages/Blog')).default;
  BlogPost = (await import('./pages/blog/BlogPost')).default;
  FAQ = (await import('./pages/FAQ')).default;
  PrivacyPolicy = (await import('./pages/PrivacyPolicy')).default;
} else {
  Homepage = lazy(() => import('./pages/Homepage'));
  ChiSiamo = lazy(() => import('./pages/ChiSiamo'));
  ComeLavoriamo = lazy(() => import('./pages/ComeLavoriamo'));
  Recensioni = lazy(() => import('./pages/Recensioni'));
  Servizi = lazy(() => import('./pages/Servizi'));
  DoveOperiamo = lazy(() => import('./pages/DoveOperiamo'));
  PulizieUffici = lazy(() => import('./pages/servizi/PulizieUffici'));
  PulizieCondomini = lazy(() => import('./pages/servizi/PulizieCondomini'));
  PulizieIndustriali = lazy(() => import('./pages/servizi/PulizieIndustriali'));
  PuliziePostCantiere = lazy(() => import('./pages/servizi/PuliziePostCantiere'));
  PulizieVetri = lazy(() => import('./pages/servizi/PulizieVetri'));
  SanificazioneAmbienti = lazy(() => import('./pages/servizi/SanificazioneAmbienti'));
  Giardinaggio = lazy(() => import('./pages/servizi/Giardinaggio'));
  GestioneCarrellati = lazy(() => import('./pages/servizi/GestioneCarrellati'));
  RichidiPreventivo = lazy(() => import('./pages/RichidiPreventivo'));
  ServizioLocaleDynamic = lazy(() => import('./pages/ServizioLocaleDynamic'));
  Blog = lazy(() => import('./pages/Blog'));
  BlogPost = lazy(() => import('./pages/blog/BlogPost'));
  FAQ = lazy(() => import('./pages/FAQ'));
  PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
}

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/come-lavoriamo" element={<ComeLavoriamo />} />
          <Route path="/recensioni" element={<Recensioni />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/dove-operiamo" element={<DoveOperiamo />} />
          <Route path="/servizi/pulizie-uffici" element={<PulizieUffici />} />
          <Route path="/servizi/pulizie-condomini" element={<PulizieCondomini />} />
          <Route path="/servizi/pulizie-industriali" element={<PulizieIndustriali />} />
          <Route path="/servizi/pulizie-post-cantiere" element={<PuliziePostCantiere />} />
          <Route path="/servizi/pulizie-vetri" element={<PulizieVetri />} />
          <Route path="/servizi/sanificazione-ambienti" element={<SanificazioneAmbienti />} />
          <Route path="/servizi/giardinaggio" element={<Giardinaggio />} />
          <Route path="/servizi/gestione-carrellati" element={<GestioneCarrellati />} />
          <Route path="/servizi/:servizio/:localita" element={<ServizioLocaleDynamic />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/richiedi-preventivo" element={<RichidiPreventivo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
