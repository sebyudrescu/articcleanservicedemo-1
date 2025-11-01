import { Building, CheckCircle, ArrowRight, Users, Clock, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import LocationsGrid from '@/components/LocationsGrid';
import InternalLinkSection from '@/components/InternalLinkSection';
import LazyImage from '@/components/LazyImage';
import RelatedBlogPosts from '@/components/RelatedBlogPosts';
import ScrollReveal from '@/components/ScrollReveal';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { cdnImage } from '@/utils/image';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/utils/structuredData';

const faqItems = [
  {
    question: 'Quali aree del condominio pulite?',
    answer:
      'Gestiamo scale, pianerottoli, ingressi, cortili, ascensori e carrellati con interventi programmati su Brescia e provincia.'
  },
  {
    question: 'Offrite contratti flessibili per i condomini?',
    answer:
      'Sì, Artic Pulizie propone interventi singoli o contratti settimanali e mensili su misura per il condominio.'
  },
  {
    question: 'È possibile abbinare i servizi di giardinaggio?',
    answer:
      'Possiamo integrare la manutenzione del verde condominiale con condizioni vantaggiose insieme alla pulizia ordinaria.'
  }
];

const PulizieCondomini = () => {
  const features = [
    "Pulizia scale e pianerottoli",
    "Sanificazione ascensori",
    "Pulizia atrii e ingressi",
    "Gestione bidoni raccolta differenziata",
    "Pulizia vetri aree comuni",
    "Cura cortili e giardini condominiali",
    "Pulizia garage e cantine",
    "Interventi programmati o occasionali"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Condominio Sempre Pulito",
      description: "Aree comuni ordinate e igienizzate che valorizzano l'intero edificio"
    },
    {
      icon: Clock,
      title: "Contratti Flessibili",
      description: "Interventi singoli o contratti periodici programmati secondo le vostre esigenze"
    },
    {
      icon: Shield,
      title: "Servizio Affidabile",
      description: "28 dipendenti qualificati garantiscono continuità e professionalità"
    },
    {
      icon: Sparkles,
      title: "Promozione Giardinaggio",
      description: "Possibilità di associare servizi di giardinaggio con condizioni vantaggiose"
    }
  ];

  const serviceTypes = [
    {
      title: "Intervento Singolo",
      description: "Pulizia occasionale",
      features: ["Pulizia completa", "Nessun vincolo", "Ideale per eventi"],
      info: "Perfetto per pulizie straordinarie o dopo lavori condominiali"
    },
    {
      title: "Contratto Settimanale",
      description: "1-2 volte a settimana",
      features: ["Pulizia regolare", "Controllo costante", "Gestione carrellati"],
      info: "La soluzione più richiesta per mantenere il condominio sempre in ordine"
    },
    {
      title: "Contratto Mensile",
      description: "Servizio programmato",
      features: ["Pulizie approfondite", "Manutenzione ordinaria", "Pianificazione"],
      info: "Ideale per condomini che necessitano di manutenzione periodica"
    }
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Pulizie condomini a Brescia',
      serviceType: 'Pulizie Condomini',
      description:
        'Pulizia scale, ingressi e aree comuni dei condomini a Brescia e provincia con gestione carrellati e servizi complementari.',
      url: '/servizi/pulizie-condomini',
      areaServed: 'Brescia',
      offers: features
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: 'Pulizie Condomini', path: '/servizi/pulizie-condomini' }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Pulizie Condomini a Brescia | Artic Pulizie"
        description="Pulizia scale, ingressi e aree comuni dei condomini a Brescia e provincia. Artic Pulizie offre gestione carrellati, giardinaggio e contratti flessibili."
        keywords="pulizie condomini brescia, pulizia scale condominio brescia, gestione carrellati artic pulizie"
        canonical={buildCanonicalUrl('/servizi/pulizie-condomini')}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Building className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pulizie <span className="text-sky-500">Condomini</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Servizi professionali di pulizia per aree comuni condominiali a Brescia e provincia.
                Contratti singoli o periodici programmati con personale qualificato.
              </p>
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Richiedi Preventivo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <LazyImage
                src={cdnImage('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1200, quality: 70, fit: 'cover' })}
                fallbackSrc="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Pulizie condomini a Brescia con Artic Pulizie"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                width={640}
                height={540}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Cosa Include il Nostro Servizio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un servizio completo per mantenere tutte le aree comuni del condominio sempre pulite e accoglienti.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 [grid-auto-rows:1fr]">
            {features.map((feature, index) => (
              <ScrollReveal
                key={index}
                delay={index * 70}
                as="article"
                className="group relative flex h-full flex-col rounded-2xl border border-sky-200/70 bg-white/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 shadow-inner group-hover:bg-sky-200 transition-colors">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <p className="text-base font-semibold leading-relaxed text-slate-800">
                  {feature}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Benefici per il Condominio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un condominio pulito e curato aumenta il valore dell'immobile e migliora la qualità della vita dei condomini.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 [grid-auto-rows:1fr]">
            {benefits.map((benefit, index) => (
              <ScrollReveal
                key={index}
                delay={index * 80}
                as="article"
                className="group flex h-full flex-col items-center rounded-2xl border border-sky-200 bg-white/95 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 shadow-inner group-hover:bg-sky-200 transition-colors">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Tipologie di Contratto
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Scegli la formula più adatta alle esigenze del tuo condominio: interventi singoli o contratti periodici programmati.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 [grid-auto-rows:1fr]">
            {serviceTypes.map((type, index) => (
              <ScrollReveal
                key={index}
                delay={index * 90}
                as="article"
                className={`group flex h-full flex-col justify-between rounded-2xl border border-sky-200/70 bg-white/95 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl ${
                  index === 1 ? 'ring-2 ring-sky-200 bg-sky-50' : ''
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-1 text-sm font-semibold text-white shadow-sm">
                      <Sparkles className="w-4 h-4" /> Più richiesto
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-500 mb-4">{type.description}</p>

                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-sky-200 pt-4">
                  <p className="text-slate-600 text-sm">{type.info}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Box */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Sparkles className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Promozione Speciale Giardinaggio
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Per i condomini dove già effettuiamo le pulizie, offriamo condizioni vantaggiose
              per associare i servizi di giardinaggio e manutenzione del verde.
            </p>
            <Link
              to="/servizi/giardinaggio"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
            >
              <span>Scopri il Servizio Giardinaggio</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LocationsGrid serviceSlug="pulizie-condomini" serviceName="Pulizie Condomini" showAll={false} />

      <RelatedBlogPosts serviceIds={['pulizie-condomini', 'gestione-carrellati']} />

      <InternalLinkSection title="Approfondisci i servizi per il condominio" intro="Consulta rapidamente le altre pagine Artic Pulizie utili per amministratori e proprietari: servizi dedicati, zone servite, recensioni e preventivi." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Valorizza il Tuo Condominio
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Richiedi un sopralluogo gratuito e senza impegno. Ti forniremo un preventivo
            personalizzato in base alle caratteristiche del tuo condominio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/richiedi-preventivo"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Richiedi Preventivo Gratuito</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PulizieCondomini;
