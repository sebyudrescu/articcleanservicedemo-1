import { Hammer, CheckCircle, ArrowRight, Clock, Shield, Sparkles, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import LocationsGrid from '@/components/LocationsGrid';
import InternalLinkSection from '@/components/InternalLinkSection';
import LazyImage from '@/components/LazyImage';
import RelatedBlogPosts from '@/components/RelatedBlogPosts';
import ScrollReveal from '@/components/ScrollReveal';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { puliziePostCantiereImage } from '@/data/serviceImages';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/utils/structuredData';

const faqItems = [
  {
    question: 'In quanto tempo completate una pulizia post-cantiere?',
    answer:
      'Dopo il sopralluogo definiamo durata e squadre: piccoli appartamenti in 1 giorno, grandi cantieri in pochi giorni lavorativi.'
  },
  {
    question: 'Vi occupate anche della rimozione dei detriti?',
    answer:
      'Sì, Artic Pulizie rimuove detriti, adesivi, polveri e coordina la gestione dei materiali di scarto secondo normativa.'
  },
  {
    question: 'È prevista la sanificazione finale degli ambienti?',
    answer:
      'Al termine della pulizia effettuiamo sanificazione e deodorazione per consegnare ambienti pronti all’uso.'
  }
];

const PuliziePostCantiere = () => {
  const features = [
    "Rimozione polveri da costruzione",
    "Pulizie post ristrutturazione appartamenti a Brescia",
    "Pulizia residui di malta e cemento",
    "Lucidatura pavimenti e superfici",
    "Pulizia vetri e infissi",
    "Sanificazione completa ambienti",
    "Preparazione per l'uso immediato",
    "Rimozione adesivi e protezioni",
    "Pulizia impianti e radiatori"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Consegna Immediata",
      description: "Spazi pronti per l'uso o la vendita senza ulteriori ritardi"
    },
    {
      icon: Building,
      title: "Ambienti Pronti all'Uso",
      description: "Pulizia professionale che valorizza il lavoro svolto"
    },
    {
      icon: Shield,
      title: "Rimozione Completa Detriti",
      description: "Eliminazione sicura di tutti i residui di cantiere"
    },
    {
      icon: Sparkles,
      title: "Risparmio Tempo e Costi",
      description: "Eviti di dover gestire internamente la pulizia finale"
    }
  ];

  const projectTypes = [
    {
      title: "Ristrutturazioni Residenziali",
      description: "Appartamenti e case",
      features: [
        "Pulizia post-lavori",
        "Pulizie post ristrutturazione Brescia",
        "Rimozione polveri",
        "Lucidatura pavimenti"
      ],
      duration: "1-2 giorni",
      scope: "Fino a 200 mq"
    },
    {
      title: "Uffici e Negozi",
      description: "Spazi commerciali",
      features: ["Pulizia professionale", "Vetrine e infissi", "Preparazione opening"],
      duration: "2-3 giorni", 
      scope: "200-1000 mq"
    },
    {
      title: "Grandi Cantieri",
      description: "Complessi industriali",
      features: ["Squadre specializzate", "Attrezzature industriali", "Gestione rifiuti"],
      duration: "1-2 settimane",
      scope: "1000+ mq"
    }
  ];

  const phases = [
    {
      title: "Valutazione Pre-Pulizia",
      description: "Sopralluogo per valutare tipologia e quantità di lavoro necessario",
      time: "30-60 min"
    },
    {
      title: "Rimozione Detriti Grossolani", 
      description: "Eliminazione di materiali di scarto, imballaggi e protezioni",
      time: "2-4 ore"
    },
    {
      title: "Pulizia Approfondita",
      description: "Rimozione polveri, residui di lavorazione e pulizia superfici",
      time: "4-8 ore"
    },
    {
      title: "Finitura e Controllo",
      description: "Lucidatura, sanificazione finale e controllo qualità",
      time: "2-3 ore"
    }
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Pulizie post cantiere a Brescia',
      serviceType: 'Pulizie Post Cantiere',
      description:
        "Pulizie post-cantiere e post ristrutturazione a Brescia con rimozione detriti, lucidatura e sanificazione finale per consegne pronte all'uso.",
      url: '/servizi/pulizie-post-cantiere',
      areaServed: 'Brescia',
      offers: features
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: 'Pulizie Post Cantiere', path: '/servizi/pulizie-post-cantiere' }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Pulizie Post Cantiere a Brescia | Artic Pulizie"
        description="Pulizie post-cantiere a Brescia con rimozione detriti, lucidatura e sanificazione finale. Artic Pulizie consegna ambienti pronti all'uso."
        keywords="pulizie post cantiere brescia, pulizie post ristrutturazione brescia, pulizie appartamenti brescia, pulizia fine lavori brescia, sanificazione post cantiere artic pulizie"
        canonical={buildCanonicalUrl('/servizi/pulizie-post-cantiere')}
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Hammer className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pulizie <span className="text-sky-500">Post-Cantiere</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Pulizie specializzate <strong>a Brescia, provincia e Lago di Garda</strong>{' '}per la consegna di nuove costruzioni o ristrutturazioni.
                Siamo il riferimento per <strong>pulizie post ristrutturazione a Brescia</strong>{' '}in appartamenti, ville, negozi e showroom.
                Trasformiamo i cantieri in spazi pronti all'uso con interventi professionali,
                squadre dedicate e attrezzature specifiche per abitazioni, uffici e industrie locali.
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
                src={puliziePostCantiereImage}
                alt="Operatori che completano le pulizie post-cantiere in un appartamento a Brescia"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                width={640}
                height={540}
                fallbackSrc={puliziePostCantiereImage}
                sizes="(min-width: 1024px) 540px, 90vw"
                priority
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
              Servizi Post-Cantiere Completi
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dalla rimozione dei detriti alla consegna finale, ci occupiamo di tutto 
              per rendere gli spazi immediatamente utilizzabili.
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
              Perché Scegliere il Nostro Servizio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Completiamo il vostro progetto con una pulizia professionale che valorizza il lavoro svolto.
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

      {/* Project Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Tipologie di Progetti
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dalla piccola ristrutturazione ai grandi cantieri, abbiamo l'esperienza 
              per gestire progetti di ogni dimensione.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 [grid-auto-rows:1fr]">
            {projectTypes.map((type, index) => (
              <ScrollReveal
                key={index}
                delay={index * 90}
                as="article"
                className="group flex h-full flex-col justify-between rounded-2xl border border-sky-200/70 bg-white/95 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{type.title}</h3>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-500 mb-4">{type.description}</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Servizi inclusi</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-lg border border-sky-200 bg-white p-3">
                    <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">Durata</p>
                    <p className="font-semibold text-slate-900">{type.duration}</p>
                  </div>
                  <div className="rounded-lg border border-sky-200 bg-white p-3">
                    <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">Superficie</p>
                    <p className="font-semibold text-slate-900">{type.scope}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Le Fasi del Nostro Intervento
            </h2>
            <p className="text-lg text-slate-600">
              Un approccio sistematico per garantire risultati perfetti in tempi ottimali.
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <ScrollReveal
                key={phase.title}
                delay={index * 90}
                as="article"
                className="group flex items-start gap-6 rounded-2xl border border-sky-200/70 bg-white/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white font-semibold text-lg shadow-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                      {phase.time}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">{phase.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal as="div" className="mt-12 rounded-3xl border border-sky-200 bg-white/95 p-10 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Tempistiche e coordinamento
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Pianificazione</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Coordinamento con direttore lavori e imprese in sito</li>
                  <li>• Interventi programmati subito dopo la consegna lavori</li>
                  <li>• Squadre aggiuntive per rispettare scadenze strette</li>
                  <li>• Disponibilità per urgenze e ritocchi pre-consegna</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Sicurezza</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Analisi rischi residui e gestione accessi in sicurezza</li>
                  <li>• DPI specifici per cantieri e personale formato</li>
                  <li>• Smaltimento controllato di polveri e materiali residui</li>
                  <li>• Coordinamento con eventuali altre squadre presenti</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LocationsGrid serviceSlug="pulizie-post-cantiere" serviceName="Pulizie Post Cantiere" showAll={false} />

      <RelatedBlogPosts serviceIds={['pulizie-post-cantiere']} />

      <InternalLinkSection title="Risorse utili dopo il cantiere" intro="Consulta tutti i collegamenti fondamentali Artic Pulizie per programmare servizi aggiuntivi, verificare le aree servite, leggere le recensioni e richiedere un preventivo." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Completa il Tuo Progetto con Successo
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Affidaci la pulizia finale per consegnare spazi perfetti e pronti all'uso. 
            Preventivo rapido in base ai tuoi tempi di cantiere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/richiedi-preventivo"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Richiedi Preventivo Gratuito</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contatti"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contattaci Ora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PuliziePostCantiere;
