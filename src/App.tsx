import { type ComponentType, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AccentThemeManager from './components/AccentThemeManager';
import Footer from './components/Footer';
import Header from './components/Header';
import MouseGlow from './components/MouseGlow';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import StickyCtaBanner from './components/StickyCtaBanner';
import ConsentBanner from './components/ConsentBanner';
import SanificazioneAmbienti from './pages/servizi/SanificazioneAmbienti';

const isServer = import.meta.env.SSR;

const assertIsComponent = (component: unknown, name: string) => {
  const isFunction = typeof component === 'function';
  const isLazyComponent =
    typeof component === 'object' && component !== null && '$$typeof' in (component as Record<string, unknown>);

  if (!isFunction && !isLazyComponent) {
    const value = component === null ? 'null' : typeof component === 'object' ? 'object' : String(component);
    throw new Error(`[SSR] Component "${name}" è undefined/invalid (tipo: ${value})`);
  }
};

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
let Giardinaggio: PageComponent;
let GestioneCarrellati: PageComponent;
let RichidiPreventivo: PageComponent;
let ServizioLocaleDynamic: PageComponent;
let Blog: PageComponent;
let BlogPost: PageComponent;
let FAQ: PageComponent;
let PrivacyPolicy: PageComponent;
let NotFound: PageComponent;

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
  Giardinaggio = (await import('./pages/servizi/Giardinaggio')).default;
  GestioneCarrellati = (await import('./pages/servizi/GestioneCarrellati')).default;
  RichidiPreventivo = (await import('./pages/RichidiPreventivo')).default;
  ServizioLocaleDynamic = (await import('./pages/ServizioLocaleDynamic')).default;
  Blog = (await import('./pages/Blog')).default;
  BlogPost = (await import('./pages/blog/BlogPost')).default;
  FAQ = (await import('./pages/FAQ')).default;
  PrivacyPolicy = (await import('./pages/PrivacyPolicy')).default;
  NotFound = (await import('./pages/NotFound')).default;
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
  Giardinaggio = lazy(() => import('./pages/servizi/Giardinaggio'));
  GestioneCarrellati = lazy(() => import('./pages/servizi/GestioneCarrellati'));
  RichidiPreventivo = lazy(() => import('./pages/RichidiPreventivo'));
  ServizioLocaleDynamic = lazy(() => import('./pages/ServizioLocaleDynamic'));
  Blog = lazy(() => import('./pages/Blog'));
  BlogPost = lazy(() => import('./pages/blog/BlogPost'));
  FAQ = lazy(() => import('./pages/FAQ'));
  PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
  NotFound = lazy(() => import('./pages/NotFound'));
}

if (isServer) {
  const criticalComponents: Record<string, unknown> = {
    App,
    ScrollToTop,
    AccentThemeManager,
    MouseGlow,
    Header,
    Footer,
    ScrollToTopButton,
    StickyCtaBanner,
    SanificazioneAmbienti,
    Homepage,
    ChiSiamo,
    ComeLavoriamo,
    Recensioni,
    Servizi,
    DoveOperiamo,
    PulizieUffici,
    PulizieCondomini,
    PulizieIndustriali,
    PuliziePostCantiere,
    PulizieVetri,
    Giardinaggio,
    GestioneCarrellati,
    RichidiPreventivo,
    ServizioLocaleDynamic,
    Blog,
    BlogPost,
    FAQ,
    PrivacyPolicy,
    NotFound
  };

  Object.entries(criticalComponents).forEach(([name, component]) => {
    assertIsComponent(component, name);
  });
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
      <AccentThemeManager />
      <MouseGlow />
      <Header />
      <main className="flex-1 pb-32">
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTopButton />
      <StickyCtaBanner />
      <ConsentBanner />
    </div>
  );
}

export default App;
