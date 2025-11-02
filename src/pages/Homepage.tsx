import {
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Award,
  Users,
  Star,
  CheckCircle,
  BadgeCheck,
  MapPin,
  FileText,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '@/components/ui/cta-with-rectangle';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';
import { siteMetadata, buildCanonicalUrl } from '@/data/siteMetadata';
import { cdnImage } from '@/utils/image';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/utils/structuredData';
import { getRecentPosts } from '@/data/blogPosts';
import { services as serviceCatalog } from '@/data/servicesData';

const homepageTestimonials = [
  {
    name: "Marco Rossi",
    company: "TechCorp Milano",
    text:
      "Artic Pulizie si occupa dei nostri uffici da 3 anni. Professionalità e qualità eccellenti, il nostro team lavora sempre in un ambiente perfetto.",
    rating: 5,
    role: "Responsabile Facilities"
  },
  {
    name: "Laura Bianchi",
    company: "Studio Legale Associato",
    text:
      "Servizio impeccabile e puntuale. I clienti apprezzano sempre la pulizia dei nostri locali. Consiglio vivamente Artic Pulizie.",
    rating: 5,
    role: "Partner"
  },
  {
    name: "Giuseppe Verdi",
    company: "Industrie Meccaniche Spa",
    text:
      "Per i nostri capannoni industriali, Artic Pulizie garantisce standard elevati di pulizia e sicurezza. Un partner affidabile.",
    rating: 5,
    role: "Direttore Operativo"
  }
];

const homepageStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteMetadata.baseUrl}#website`,
    name: siteMetadata.siteName,
    url: siteMetadata.baseUrl,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.legalName
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteMetadata.baseUrl}/ricerca?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  },
  buildServiceSchema({
    name: 'Servizi di pulizia professionale Artic Pulizie',
    serviceType: 'Pulizie Professionali',
    description: 'Impresa di pulizie a Brescia e provincia per uffici, condomini, industrie e sanificazioni specialistiche.',
    url: '/',
    areaServed: siteMetadata.locality,
    offers: [
      'Pulizie Uffici a Brescia',
      'Pulizie Condomini Brescia e Provincia',
      'Sanificazione Ambienti Professionale',
      'Pulizie Industriali e Capannoni'
    ],
    aggregateRating: siteMetadata.aggregateRating,
    reviews: homepageTestimonials.slice(0, 3).map((testimonial) => ({
      author: testimonial.name,
      reviewBody: testimonial.text,
      ratingValue: testimonial.rating
    }))
  }),
  buildFAQSchema([
    {
      question: 'Offrite pulizie uffici a Brescia?',
      answer: 'Sì, Artic Pulizie gestisce pulizie uffici a Brescia e provincia con turni programmati e personale selezionato.'
    },
    {
      question: 'Quanto tempo impiegate per inviare un preventivo?',
      answer: 'Invieremo un preventivo personalizzato entro 24 ore dalla richiesta, con possibilità di sopralluogo gratuito.'
    },
    {
      question: 'Disponete di certificazioni e prodotti professionali?',
      answer: 'Utilizziamo esclusivamente prodotti professionali certificati e protocolli di sanificazione aggiornati.'
    }
  ]),
  buildBreadcrumbSchema([])
].filter(Boolean) as Record<string, unknown>[];

const Homepage = () => {
  const services = [
    {
      title: "Pulizie Uffici",
      description: "Servizi completi per uffici e spazi lavorativi a Brescia e provincia con prodotti professionali e personale qualificato.",
      icon: "🏢",
      features: ["Pulizia quotidiana", "Sanificazione postazioni", "Gestione rifiuti"],
      link: "/servizi/pulizie-uffici",
      image: cdnImage('https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 75 }),
      fallbackImage: 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Pulizie Condomini",
      description: "Pulizie professionali per aree comuni condominiali a Brescia con contratti singoli o periodici programmati.",
      icon: "🏘️",
      features: ["Aree comuni", "Scale e ascensori", "Gestione carrellati"],
      link: "/servizi/pulizie-condomini",
      image: cdnImage('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Pulizie Industriali",
      description: "Interventi specializzati a Brescia per capannoni, magazzini e ambienti industriali di ogni dimensione.",
      icon: "🏭",
      features: ["Pulizia capannoni", "Aspirazione industriale", "Trattamento pavimenti"],
      link: "/servizi/pulizie-industriali",
      image: cdnImage('https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 75 }),
      fallbackImage: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Pulizie Vetri e Vetrate",
      description: "Servizio specializzato per vetri, vetrate e superfici trasparenti a Brescia e nei principali poli produttivi.",
      icon: "✨",
      features: ["Vetri senza aloni", "Interventi in altezza", "Grandi superfici"],
      link: "/servizi/pulizie-vetri",
      image: cdnImage('https://images.pexels.com/photos/7735355/pexels-photo-7735355.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 75 }),
      fallbackImage: 'https://images.pexels.com/photos/7735355/pexels-photo-7735355.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Giardinaggio",
      description: "Cura e manutenzione di parchi, giardini e aiuole per condomini e aziende della provincia di Brescia.",
      icon: "🌳",
      features: ["Manutenzione verde", "Potature", "Cura aiuole"],
      link: "/servizi/giardinaggio",
      image: cdnImage('https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Gestione Carrellati",
      description: "Gestione professionale dei bidoni per la raccolta differenziata in condomini e aziende di Brescia.",
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
      description: "Un team di 28 dipendenti qualificati al servizio di aziende e condomini di Brescia con standard elevati."
    },
    {
      icon: Clock,
      title: "Puntualità Garantita",
      description: "Rispettiamo sempre gli orari concordati per non interferire con le attività lavorative e condominiali locali."
    },
    {
      icon: Shield,
      title: "Prodotti Professionali",
      description: "Utilizziamo prodotti professionali certificati ISO e HACCP per risultati impeccabili a Brescia."
    },
    {
      icon: Users,
      title: "Personale Qualificato",
      description: "Staff interno formato su sicurezza, DVR e protocolli per settori uffici, retail e industria."
    }
  ];
  const testimonials = homepageTestimonials;
  const heroMetrics = [
    {
      value: '4,9/5',
      label: 'Valutazione media',
      description: '87 recensioni verificate su Google, Trustpilot e portali locali'
    },
    {
      value: '28',
      label: 'Professionisti interni',
      description: 'Squadre dedicate per uffici, condomini, retail e capannoni'
    },
    {
      value: '24h',
      label: 'Preventivo garantito',
      description: 'Sopralluogo e proposta per Brescia e provincia entro il giorno successivo'
    }
  ];

  const certificationBadges = [
    { title: 'ISO 9001', subtitle: 'Sistema di gestione qualità certificato' },
    { title: 'HACCP', subtitle: 'Protocollo igienico per ambienti alimentari' },
    { title: 'Formazione DVR', subtitle: 'Operatori con attestati sicurezza e DPI' }
  ];

  const clientSegments = [
    { name: 'Facility Manager Brescia', description: 'Sedi direzionali e uffici corporate' },
    { name: 'Residenziale Premium Garda', description: 'Condomini turistici e residenze di pregio' },
    { name: 'Settore Healthcare', description: 'Poliambulatori, cliniche e centri medici' },
    { name: 'Industria & Logistica', description: 'Capannoni, magazzini e aree produttive' }
  ];

  const serviceHubs = [
    {
      icon: <Building2 className="w-6 h-6 text-sky-500" aria-hidden="true" />,
      title: 'Pulizie uffici Brescia',
      description: 'Check-list operative, turni serali e protocolli per sedi direzionali e coworking cittadini.',
      to: '/servizi/pulizie-uffici'
    },
    {
      icon: <Shield className="w-6 h-6 text-sky-500" aria-hidden="true" />,
      title: 'Sanificazioni certificate',
      description: 'Soluzioni HACCP e protocolli sanitari per strutture healthcare e produzione alimentare.',
      to: '/servizi/sanificazione-ambienti'
    },
    {
      icon: <MapPin className="w-6 h-6 text-sky-500" aria-hidden="true" />,
      title: 'Copertura Brescia e provincia',
      description: 'Pagine locali dedicate per oltre 20 comuni con preventivi rapidi e squadre sul territorio.',
      to: '/dove-operiamo'
    },
    {
      icon: <FileText className="w-6 h-6 text-sky-500" aria-hidden="true" />,
      title: 'Gestione carrellati e rifiuti',
      description: 'Servizio completo per condomini e aziende con report digitali e verifiche programmate.',
      to: '/servizi/gestione-carrellati'
    }
  ];

  const recentGuides = getRecentPosts(3);
  const serviceNameById = Object.fromEntries(serviceCatalog.map((service) => [service.id, service.name]));

  return (
    <div>
      <SEO
        title="Impresa di Pulizie a Brescia e Provincia | Artic Pulizie"
        description="Impresa di pulizie a Brescia per uffici, condomini e industrie. Squadra Artic Pulizie attiva in provincia con preventivo gratuito in 24 ore."
        keywords="impresa pulizie brescia, pulizie uffici brescia, pulizie condomini brescia, sanificazione ambienti brescia, pulizie industriali brescia"
        canonical={buildCanonicalUrl('/')}
        structuredData={homepageStructuredData}
      />
      {/* Hero Section */}
      <section
        id="homepage-hero"
        data-cta-anchor="hero"
        data-theme-accent="sky"
        className="pt-24 pb-20 relative overflow-hidden min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20"
      >
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
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sky-700 font-semibold mx-auto shadow-sm">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Impresa di pulizie leader a Brescia e provincia</span>
              </div>
              <h1 className="hero-title-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight max-w-5xl mx-auto tracking-tight">
                Impresa di Pulizie a Brescia per Aziende, Condomini e Industria
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Artic Pulizie è l'<strong>impresa di pulizie a Brescia</strong> scelta da aziende, facility manager e amministratori condominiali.
                Offriamo sanificazioni certificate, piani operativi su misura e squadre dedicate in tutta la provincia.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Copriamo Brescia città, la Franciacorta, il Lago di Garda e i principali distretti industriali con interventi programmati, emergenze 24/7 e report digitali.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 px-4">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-sm border border-slate-100"
                >
                  <p className="text-3xl font-bold text-sky-600">{metric.value}</p>
                  <p className="text-slate-900 font-semibold mt-2">{metric.label}</p>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 px-4">
              {certificationBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex items-center space-x-3 bg-white/80 backdrop-blur rounded-xl px-4 py-3 shadow-sm border border-sky-100"
                >
                  <BadgeCheck className="w-5 h-5 text-emerald-500" aria-hidden="true" />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">{badge.title}</p>
                    <p className="text-xs text-slate-600">{badge.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3 px-4">
              {clientSegments.map((segment) => (
                <div
                  key={segment.name}
                  className="bg-slate-900/80 text-white px-4 py-3 rounded-xl text-sm shadow-md"
                  aria-label={`Cliente servito: ${segment.name}`}
                >
                  <p className="font-semibold">{segment.name}</p>
                  <p className="text-xs text-slate-200">{segment.description}</p>
                </div>
              ))}
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
                <span>+87 recensioni verificate (4,9/5) su Google e portali locali</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                <span>Sopralluoghi gratuiti in tutta Brescia e provincia</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>Check-list digitali per uffici, condomini e industrie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Hubs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Hub strategici per dominare le ricerche locali
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Ottimizza la presenza della tua impresa scegliendo il cluster più rilevante:
              servizi verticali, sanificazioni certificate, copertura territoriale o gestione rifiuti.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {serviceHubs.map((hub) => (
              <Link
                key={hub.title}
                to={hub.to}
                className="group bg-slate-900 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
                    {hub.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-sky-300 transition-colors">
                      {hub.title}
                    </h3>
                    <p className="text-sm text-slate-200 leading-relaxed">{hub.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-sky-300">
                      Approfondisci
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Guide operative e checklist per Brescia
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Approfondimenti SEO-ready per facility manager, amministratori condominiali e responsabili di stabilimento che vogliono posizionarsi su Google.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {recentGuides.map((post) => {
              const relatedServices = post.serviceIds
                .map((id) => serviceNameById[id])
                .filter(Boolean);

              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100"
                >
                  <LazyImage
                    src={post.heroImage}
                    alt={`${post.title} - Guida Artic Pulizie Brescia`}
                    className="w-full h-44 object-cover"
                    width={480}
                    height={220}
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                  />
                  <div className="p-6 space-y-3">
                    <p className="text-xs uppercase tracking-widest text-sky-600 font-semibold">
                      {relatedServices.length > 0 ? relatedServices.join(' • ') : 'Pulizie professionali a Brescia'}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-sky-600">
                      Leggi la guida
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Scarica la checklist SEO delle pulizie professionali a Brescia
              </h2>
              <p className="text-lg text-slate-200 leading-relaxed">
                Ricevi via email il modello operativo utilizzato dal nostro team per uffici, condomini e capannoni.
                Il modulo di richiesta preventivo ora include i campi servizio e località per personalizzare il follow-up.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" aria-hidden="true" />
                  <span className="text-sm text-slate-100 leading-relaxed">
                    Indicazioni pratiche per ottimizzare le schede Google Business Profile delle sedi bresciane.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" aria-hidden="true" />
                  <span className="text-sm text-slate-100 leading-relaxed">
                    Template di email follow-up segmentati per servizio richiesto e comune di riferimento.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" aria-hidden="true" />
                  <span className="text-sm text-slate-100 leading-relaxed">
                    KPI suggeriti per monitorare conversioni, recensioni e retention dei clienti locali.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold">Richiedi checklist + preventivo</h3>
              <p className="text-sm text-slate-600">
                Compila il form dedicato con <strong>servizio di interesse</strong> e <strong>località</strong> per ricevere la checklist e un preventivo personalizzato in 24 ore.
              </p>
              <div className="space-y-4 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-sky-500" aria-hidden="true" />
                  <span>Webhook Make aggiornato con segmentazione servizio/località.</span>
                </p>
                <p className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-sky-500" aria-hidden="true" />
                  <span>Follow-up automatico con risorse dedicate all'area selezionata.</span>
                </p>
              </div>
              <Link
                to="/richiedi-preventivo?utm_source=homepage&utm_medium=cta&utm_campaign=checklist-pulizie-brescia"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <FileText className="w-5 h-5" aria-hidden="true" />
                <span>Compila il modulo e ricevi la checklist</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section data-cta-anchor="cta-hotspot" data-theme-accent="emerald" className="py-20 bg-white">
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
                  sizes="(min-width: 1280px) 320px, (min-width: 768px) 45vw, 90vw"
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
      <section data-theme-accent="cyan" className="py-20 bg-slate-50">
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
      <section data-cta-anchor="cta-hotspot" data-theme-accent="blue" className="py-20 bg-white">
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
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="Artic Pulizie" />
                <div className="flex items-center mb-4">
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="flex">
                    <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                    <meta itemProp="worstRating" content="1" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed italic" itemProp="reviewBody">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-bold text-slate-900" itemProp="author">
                    {testimonial.name}
                  </h4>
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
