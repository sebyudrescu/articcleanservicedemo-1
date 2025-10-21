import { ArrowRight, Sparkles, Shield, Clock, Award, Users, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '@/components/ui/cta-with-rectangle';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';
import { siteMetadata, buildCanonicalUrl } from '@/data/siteMetadata';
import { getRecentPosts } from '@/data/blogPosts';
import { cdnImage } from '@/utils/image';

const homepageStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteMetadata.baseUrl}#website`,
    "name": siteMetadata.siteName,
    "url": siteMetadata.baseUrl,
    "publisher": {
      "@type": "Organization",
      "name": siteMetadata.legalName
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteMetadata.baseUrl}/ricerca?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pulizie Professionali",
    "provider": {
      "@type": "LocalBusiness",
      "name": siteMetadata.siteName,
      "url": siteMetadata.baseUrl
    },
    "areaServed": {
      "@type": "City",
      "name": siteMetadata.locality
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi di Pulizia per Aziende e Condomini",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pulizie Uffici a Brescia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pulizie Condomini Brescia e Provincia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sanificazione Ambienti Professionale"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pulizie Industriali e Capannoni"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Offrite pulizie uffici a Brescia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sì, Arctic Pulizie gestisce pulizie uffici a Brescia e provincia con turni programmati e personale selezionato."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto tempo impiegate per inviare un preventivo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Invieremo un preventivo personalizzato entro 24 ore dalla richiesta, con possibilità di sopralluogo gratuito."
        }
      },
      {
        "@type": "Question",
        "name": "Disponete di certificazioni e prodotti professionali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utilizziamo esclusivamente prodotti professionali certificati e protocolli di sanificazione aggiornati."
        }
      }
    ]
  }
];

const Homepage = () => {
  const services = [
    {
      title: "Pulizie Uffici",
      description: "Servizi completi per uffici e spazi lavorativi con prodotti professionali e personale qualificato.",
      icon: "🏢",
      features: ["Pulizia quotidiana", "Sanificazione postazioni", "Gestione rifiuti"],
      link: "/servizi/pulizie-uffici",
      image: cdnImage('https://i.imgur.com/RAZaa1z.jpeg', { width: 960, quality: 75 }),
      fallbackImage: 'https://i.imgur.com/RAZaa1z.jpeg'
    },
    {
      title: "Pulizie Condomini",
      description: "Pulizie professionali per aree comuni condominiali con contratti singoli o periodici programmati.",
      icon: "🏘️",
      features: ["Aree comuni", "Scale e ascensori", "Gestione carrellati"],
      link: "/servizi/pulizie-condomini",
      image: cdnImage('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Pulizie Industriali",
      description: "Interventi specializzati per capannoni, magazzini e ambienti industriali di ogni dimensione.",
      icon: "🏭",
      features: ["Pulizia capannoni", "Aspirazione industriale", "Trattamento pavimenti"],
      link: "/servizi/pulizie-industriali",
      image: cdnImage('https://i.imgur.com/ja4pwgZ.png', { width: 960, quality: 75 }),
      fallbackImage: 'https://i.imgur.com/ja4pwgZ.png'
    },
    {
      title: "Pulizie Vetri e Vetrate",
      description: "Servizio specializzato per vetri, vetrate e superfici trasparenti di ogni tipo e dimensione.",
      icon: "✨",
      features: ["Vetri senza aloni", "Interventi in altezza", "Grandi superfici"],
      link: "/servizi/pulizie-vetri",
      image: cdnImage('https://i.imgur.com/mwIw3dd.jpeg', { width: 960, quality: 75 }),
      fallbackImage: 'https://i.imgur.com/mwIw3dd.jpeg'
    },
    {
      title: "Giardinaggio",
      description: "Cura e manutenzione di parchi, giardini e aiuole. Promozione speciale per condomini.",
      icon: "🌳",
      features: ["Manutenzione verde", "Potature", "Cura aiuole"],
      link: "/servizi/giardinaggio",
      image: cdnImage('https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Gestione Carrellati",
      description: "Gestione professionale dei bidoni per la raccolta differenziata in condomini e aziende.",
      icon: "♻️",
      features: ["Raccolta differenziata", "Pulizia carrellati", "Gestione periodica"],
      link: "/servizi/gestione-carrellati",
      image: cdnImage('https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Alta Qualità del Servizio",
      description: "Un team di 28 dipendenti qualificati al servizio di aziende e privati con standard elevati."
    },
    {
      icon: Clock,
      title: "Puntualità Garantita",
      description: "Rispettiamo sempre gli orari concordati per non interferire con le tue attività lavorative."
    },
    {
      icon: Shield,
      title: "Prodotti Professionali",
      description: "Utilizziamo prodotti professionali ad alta efficacia sgrassante per risultati impeccabili."
    },
    {
      icon: Users,
      title: "Personale Qualificato",
      description: "Staff formato e aggiornato sui migliori standard di qualità e sicurezza sul lavoro."
    }
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      company: "TechCorp Milano",
      text: "Arctic Pulizie si occupa dei nostri uffici da 3 anni. Professionalità e qualità eccellenti, il nostro team lavora sempre in un ambiente perfetto.",
      rating: 5,
      role: "Responsabile Facilities"
    },
    {
      name: "Laura Bianchi",
      company: "Studio Legale Associato",
      text: "Servizio impeccabile e puntuale. I clienti apprezzano sempre la pulizia dei nostri locali. Consiglio vivamente Arctic Pulizie.",
      rating: 5,
      role: "Partner"
    },
    {
      name: "Giuseppe Verdi",
      company: "Industrie Meccaniche Spa",
      text: "Per i nostri capannoni industriali, Arctic Pulizie garantisce standard elevati di pulizia e sicurezza. Un partner affidabile.",
      rating: 5,
      role: "Direttore Operativo"
    }
  ];

  const competitorInsights = [
    {
      title: 'Keyword di punta',
      description:
        'Le prime imprese di pulizie a Brescia che compaiono su Google, come Pulindustria e Splendor Service, strutturano le pagine attorno a keyword come "impresa di pulizie Brescia", "sanificazione ambienti" e "pulizie industriali". Abbiamo integrato queste ricerche primarie in ogni sezione del sito.'
    },
    {
      title: 'Struttura dei contenuti',
      description:
        'I competitor più visibili sfruttano blocchi informativi su settori serviti, procedure certificate e FAQ locali. Abbiamo replicato e ampliato questi format con sezioni dedicate alle esigenze di uffici, condomini, hotel, negozi e industrie.'
    },
    {
      title: 'CTA e prove sociali',
      description:
        'Le realtà con migliori ranking inseriscono richiami a preventivi rapidi, recensioni e garanzie di certificazioni. Abbiamo rafforzato questi elementi con CTA localizzate e testimonianze settoriali.'
    }
  ];

  const sectorsServed = [
    {
      icon: '🏢',
      title: 'Uffici e studi professionali',
      description: 'Pulizie quotidiane per uffici direzionali, studi medici e amministrativi con protocolli anti-contaminazione e gestione materiali di consumo.'
    },
    {
      icon: '🏨',
      title: 'Hotel, B&B e strutture ricettive',
      description: 'Servizi di housekeeping, pulizia camere e sanificazione aree comuni calibrati sui picchi turistici della provincia di Brescia.'
    },
    {
      icon: '🏬',
      title: 'Negozi e GDO',
      description: 'Pulizia vetrine, corsie e magazzini con interventi fuori orario di apertura per retail, boutique e supermercati.'
    },
    {
      icon: '🏭',
      title: 'Industrie e logistica',
      description: 'Trattamenti pavimenti, rimozione residui di lavorazione e sanificazione spogliatoi per capannoni, laboratori e hub logistici.'
    }
  ];

  const processSteps = [
    {
      title: 'Analisi iniziale',
      text: 'Sopralluogo tecnico e checklist ispettiva per individuare criticità di uffici, condomini e linee produttive.'
    },
    {
      title: 'Piano di pulizia',
      text: 'Definizione di frequenze, prodotti certificati e personale dedicato con calendario condiviso.'
    },
    {
      title: 'Esecuzione monitorata',
      text: 'Squadre formate con DPI, macchinari professionali e reportistica fotografica su richiesta.'
    },
    {
      title: 'Ottimizzazione continua',
      text: 'Verifiche periodiche con il referente e aggiornamento delle procedure in base alle stagionalità.'
    }
  ];

  const recentPosts = getRecentPosts(3);

  return (
    <div>
      <SEO
        title="Impresa di Pulizie a Brescia e Provincia | Arctic Pulizie"
        description="Impresa di pulizie a Brescia specializzata in servizi professionali per uffici, condomini, industrie, hotel e negozi. Preventivo gratuito in 24 ore e sanificazioni certificate in tutta la provincia."
        keywords="impresa pulizie brescia, impresa pulizie provincia di brescia, pulizie uffici brescia, pulizie condomini brescia, pulizie industriali brescia, sanificazione ambienti brescia, pulizie professionali brescia"
        canonical={buildCanonicalUrl('/')}
        structuredData={homepageStructuredData}
      />
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="wave-container">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
          
          <div className="particles-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="hero-title-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight max-w-5xl mx-auto tracking-tight">
                Impresa di pulizie a Brescia per aziende, condomini e strutture ricettive
                <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent mt-2">
                  Servizi professionali programmati in tutta la provincia
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
                Arctic Pulizie è l&apos;impresa di pulizie a Brescia che supporta uffici, industrie, condomini, negozi e hotel con piani su misura, macchinari professionali e protocolli certificati.
                <span className="block mt-2 font-medium text-sky-700">
                  Sopralluogo gratuito, preventivo entro 24 ore e squadre dedicate per ogni sede operativa.
                </span>
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center mt-16 px-4">
              <Link to="/richiedi-preventivo">
                <button className="primary-cta-button group relative overflow-hidden w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-300 group-hover:from-emerald-400 group-hover:via-teal-400 group-hover:to-cyan-400"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <div className="relative z-10 flex items-center justify-center space-x-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5">
                    <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-bold text-base sm:text-lg lg:text-xl text-white whitespace-nowrap">
                      Richiedi Preventivo
                    </span>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  
                  <div className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:scale-105 group-hover:border-white/50 transition-all duration-300"></div>
                </button>
              </Link>
              
              <Link to="/servizi">
                <button className="white-bg-button group relative overflow-hidden rounded-xl transition-all duration-300 transform perspective-1000 hover:translateY(-3px) shadow-lg hover:shadow-xl w-full sm:w-auto">
                  {/* Background completamente bianco */}
                  <div className="absolute inset-0 bg-white rounded-xl"></div>
                  
                  {/* Border gradient */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-300 via-cyan-400 to-teal-400 p-[2px] group-hover:from-sky-400 group-hover:via-cyan-500 group-hover:to-teal-500">
                    <div className="h-full w-full rounded-[10px] bg-white"></div>
                  </div>
                  
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
                  
                  <div className="relative z-10 flex items-center justify-center space-x-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5">
                    <span className="font-bold text-base sm:text-lg lg:text-xl text-slate-700 group-hover:text-sky-700 transition-colors duration-300 whitespace-nowrap">
                      Scopri i Nostri Servizi
                    </span>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-slate-600 group-hover:text-sky-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-12 text-xs sm:text-sm lg:text-base text-slate-600 px-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Sopralluoghi gratuiti in tutta Brescia e provincia</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                <span>28 addetti specializzati con attestati HACCP e DPI</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>Preventivi trasparenti e contratti modulabili</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive SEO Insights */}
      <section className="py-16 bg-white border-t border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-start md:justify-between md:space-x-12">
            <div className="md:w-1/3 mb-10 md:mb-0">
              <p className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-emerald-100 text-emerald-700 rounded-full">
                Analisi concorrenza Brescia
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Cosa abbiamo preso dai migliori competitor locali
              </h2>
              <p className="mt-3 text-slate-600">
                Le ottimizzazioni SEO nascono dallo studio delle aziende di pulizie più visibili nelle SERP di Brescia e provincia. Abbiamo applicato le stesse leve, migliorandole con contenuti più completi e localizzati.
              </p>
            </div>
            <div className="md:w-2/3 grid gap-6 sm:grid-cols-2">
              {competitorInsights.map((insight, index) => (
                <div key={index} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-sky-300 transition-all">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{insight.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-sky-100 text-sky-600 rounded-full">
              Servizi per ogni settore
            </p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Pulizie professionali a Brescia per uffici, hotel, retail e industrie
            </h2>
            <p className="mt-3 text-slate-600">
              Abbiamo ampliato le sezioni dedicate ai comparti serviti per intercettare le ricerche specifiche di facility manager, amministratori condominiali, direttori d&apos;hotel e responsabili di stabilimento.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sectorsServed.map((sector, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col">
                <span className="text-3xl mb-4">{sector.icon}</span>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{sector.title}</h3>
                <p className="text-slate-600 leading-relaxed">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-teal-100 text-teal-700 rounded-full">
              Metodo Arctic Pulizie
            </p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-slate-900">
              Processo operativo certificato per imprese di pulizie a Brescia
            </h2>
            <p className="mt-3 text-slate-600">
              La struttura delle pagine riprende i passaggi che i competitor citano nei loro siti, potenziati con un focus su sopralluoghi, checklist e monitoraggio qualità.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={index} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <p className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-sky-100 text-sky-600 rounded-full">
                  Dal nostro blog
                </p>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-slate-900">
                  Guide pratiche per la tua impresa a Brescia
                </h2>
                <p className="mt-2 text-slate-600 max-w-2xl">
                  Checklist, consigli operativi e strategie per ottimizzare pulizie, sanificazioni e gestione condominiale.
                </p>
              </div>
              <Link
                to="/blog"
                className="hidden md:inline-flex items-center space-x-2 bg-white border border-slate-200 hover:border-sky-300 text-sky-600 px-5 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <span>Visita il blog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-3xl border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <LazyImage
                    src={cdnImage(post.heroImage, { width: 900, quality: 70, fit: 'cover' })}
                    fallbackSrc={post.heroImage}
                    alt={`${post.title} - Arctic Pulizie Brescia`}
                    className="w-full h-48 object-cover"
                    width={900}
                    height={360}
                  />
                  <div className="p-6">
                    <div className="flex items-center text-xs text-slate-500 space-x-2 mb-3">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Intl.DateTimeFormat('it-IT', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        }).format(new Date(post.publishedAt))}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-5 inline-flex items-center space-x-2 text-sm font-semibold text-sky-600 group-hover:text-sky-700">
                      <span>Leggi l&apos;articolo</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center md:hidden">
              <Link
                to="/blog"
                className="inline-flex items-center space-x-2 bg-white border border-slate-200 hover:border-sky-300 text-sky-600 px-5 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <span>Visita il blog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              I Nostri <span className="text-sky-500">Servizi</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Soluzioni complete per ogni esigenza di pulizia aziendale, 
              con personale qualificato e attrezzature professionali.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="group bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-sky-100 cursor-pointer transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <LazyImage
                  src={service.image}
                  fallbackSrc={service.fallbackImage}
                  alt={`${service.title} a Brescia e provincia`}
                  className="w-full h-44 object-cover rounded-xl mb-4"
                  width={600}
                  height={320}
                />
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-sky-600 font-semibold group-hover:text-sky-700 transition-colors">
                  <span>Scopri di più</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servizi"
              className="inline-flex items-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Vedi Tutti i Servizi</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Perché Scegliere la Nostra <span className="text-sky-500">Impresa di Pulizie</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Alta qualità del servizio e prezzi competitivi che ci distinguono nel settore delle pulizie professionali a Brescia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <advantage.icon className="w-8 h-8 text-sky-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Cosa Dicono i Nostri <span className="text-sky-500">Clienti</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra migliore referenza. 
              Scopri perché ci scelgono e ci consigliano.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl p-6 relative group hover:bg-sky-50 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sky-600 text-sm">{testimonial.role}</p>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/recensioni"
              className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-700 font-semibold"
            >
              <span>Leggi Tutte le Recensioni</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Nuovo Design Elegante */}
      <CTASection
        badge={{
          text: "Preventivo Gratuito"
        }}
        title="Pronto a iniziare con la nostra Impresa di Pulizie?"
        description="Contattaci per un preventivo personalizzato e gratuito. Sopralluoghi senza impegno. Serviamo aziende e privati a Brescia e provincia con contratti singoli o periodici programmati."
        action={{
          text: "Richiedi Preventivo Gratuito",
          href: "/richiedi-preventivo",
          variant: "glow"
        }}
      />
    </div>
  );
};

export default Homepage;
