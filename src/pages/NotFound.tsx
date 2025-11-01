import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { buildCanonicalUrl } from '@/data/siteMetadata';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Pagina non trovata | Artic Pulizie</title>
        <meta name="description" content="La pagina che cerchi non esiste più o è stata spostata. Torna alla homepage di Artic Pulizie o richiedi subito un preventivo personalizzato." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={buildCanonicalUrl('/404')} />
      </Helmet>

      <main className="pt-32 pb-24">
        <section
          data-theme-accent="cyan"
          className="relative overflow-hidden bg-gradient-to-br from-white via-cyan-50/20 to-sky-50/40"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 py-20">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full accent-surface px-4 py-2 text-sm font-semibold text-slate-600">
                Errore 404
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Pagina non trovata
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                La pagina che stavi cercando potrebbe essere stata spostata o rimossa. Utilizza i pulsanti
                qui sotto per continuare la navigazione o contattare il nostro team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl accent-focus"
                style={{ color: 'var(--accent-color-strong)' }}
              >
                Torna alla Home
              </Link>
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl accent-focus"
                style={{ backgroundImage: 'var(--accent-gradient)' }}
              >
                Richiedi un preventivo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFound;
