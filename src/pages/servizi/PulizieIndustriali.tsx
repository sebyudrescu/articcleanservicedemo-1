import { Factory, CheckCircle, ArrowRight, Shield, Users, Wrench, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import LocationsGrid from '@/components/LocationsGrid';
import InternalLinkSection from '@/components/InternalLinkSection';
import LazyImage from '@/components/LazyImage';
import RelatedBlogPosts from '@/components/RelatedBlogPosts';
import ScrollReveal from '@/components/ScrollReveal';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { pulizieIndustrialiImage, pulizieIndustrialiImageSmall } from '@/data/serviceImages';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/utils/structuredData';

const faqItems = [
  {
    question: 'Quali ambienti industriali pulisce Artic Pulizie?',
    answer:
      'Puliamo capannoni, magazzini, stabilimenti produttivi, linee di produzione e impianti industriali in tutta la provincia di Brescia.'
  },
  {
    question: 'Che attrezzature utilizzate per le pulizie industriali?',
    answer:
      'Usiamo lavasciuga industriali, aspiratori ad alta potenza, idropulitrici e macchinari dedicati alle superfici continue.'
  },
  {
    question: 'È possibile programmare interventi notturni?',
    answer:
      'Sì, pianifichiamo anche interventi in orario notturno o nei weekend per non fermare la produzione.'
  }
];

const PulizieIndustriali = () => {
  const features = [
    "Pulizie capannoni industriali a Brescia",
    "Aspirazione industriale specializzata",
    "Trattamenti pavimenti industriali",
    "Pulizia macchinari e impianti",
    "Pulizia pannelli fotovoltaici Brescia",
    "Rimozione polveri e residui di lavorazione",
    "Sanificazione aree produttive",
    "Pulizia sistemi di ventilazione",
    "Gestione rifiuti industriali"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Conformità Normative",
      description: "Rispetto rigoroso di tutte le normative di sicurezza e igiene industriale"
    },
    {
      icon: Users,
      title: "Ambienti di Lavoro Sicuri",
      description: "Riduzione dei rischi per i lavoratori attraverso pulizie specializzate"
    },
    {
      icon: Wrench,
      title: "Efficienza Impianti",
      description: "Manutenzione che preserva e migliora le prestazioni dei macchinari"
    },
    {
      icon: AlertTriangle,
      title: "Prevenzione Incidenti",
      description: "Ambienti puliti riducono significativamente i rischi di incidenti"
    }
  ];

  const industrialTypes = [
    {
      title: "Piccole Industrie",
      description: "1.000-5.000 mq",
      features: ["Pulizia settimanale", "Gestione rifiuti", "Trattamento pavimenti"],
      sectors: ["Artigianato", "Piccole manifatture", "Laboratori"]
    },
    {
      title: "Medie Industrie", 
      description: "5.000-20.000 mq",
      features: ["Pulizia programmata", "Macchinari specializzati", "Squadre dedicate"],
      sectors: ["Automotive", "Alimentare", "Chimico"]
    },
    {
      title: "Grandi Complessi",
      description: "20.000+ mq",
      features: ["Servizio H24", "Supervisione in loco", "Protocolli personalizzati"],
      sectors: ["Siderurgico", "Petrolchimico", "Farmaceutico"]
    }
  ];

  const equipment = [
    "Aspiratori industriali ad alta potenza",
    "Lavasciuga per grandi superfici", 
    "Idropulitrici professionali",
    "Sistemi di nebulizzazione",
    "Attrezzature per lavoro in altezza",
    "Macchinari per trattamento pavimenti"
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Pulizie industriali a Brescia',
      serviceType: 'Pulizie Industriali',
      description:
        'Pulizie industriali e manutenzione capannoni a Brescia, compresa la pulizia di pannelli fotovoltaici, con macchinari professionali, protocolli certificati e personale specializzato.',
      url: '/servizi/pulizie-industriali',
      areaServed: 'Brescia',
      offers: features
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: 'Pulizie Industriali', path: '/servizi/pulizie-industriali' }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Pulizie Industriali a Brescia | Artic Pulizie"
        description="Pulizie industriali e manutenzione capannoni a Brescia con macchinari professionali e protocolli certificati. Artic Pulizie garantisce sicurezza e continuità produttiva."
        keywords="pulizie industriali brescia, pulizie capannoni industriali brescia, pulizia capannoni brescia, pulizia pannelli fotovoltaici brescia, pulizie fabbriche artic pulizie, manutenzione industriale brescia"
        canonical={buildCanonicalUrl('/servizi/pulizie-industriali')}
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Factory className="w-8 h-8 text-sky-700" />
                <span className="text-sky-800 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pulizie <span className="text-sky-700">Industriali</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Interventi specializzati <strong>a Brescia e provincia</strong>{' '}per capannoni industriali, magazzini e ambienti produttivi.
                Operiamo nei poli di Val Trompia, Franciacorta e Lago di Garda con squadre dedicate,
                attrezzature professionali e protocolli certificati, includendo la <strong>pulizia pannelli fotovoltaici a Brescia</strong>{' '}
                per mantenere la massima efficienza energetica degli impianti.
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
                src={pulizieIndustrialiImage}
                srcSet={`${pulizieIndustrialiImageSmall} 640w, ${pulizieIndustrialiImage} 960w`}
                alt="Squadra che igienizza un capannone industriale a Brescia"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                width={960}
                height={598}
                fallbackSrc={pulizieIndustrialiImageSmall}
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
              Servizi Industriali Specializzati
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Interventi mirati per ogni tipo di ambiente industriale con attrezzature
              e tecniche specifiche per il settore, dal lavaggio <strong>capannoni industriali a Brescia</strong>
              alla manutenzione di linee produttive e impianti fotovoltaici.
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
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-800 shadow-inner group-hover:bg-sky-200 transition-colors">
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
              Benefici per la Tua Industria
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Pulizie industriali professionali garantiscono sicurezza, efficienza e conformità normativa.
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
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-800 shadow-inner group-hover:bg-sky-200 transition-colors">
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

      {/* Industrial Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Soluzioni per Ogni Settore Industriale
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dall'artigianato alle grandi industrie, abbiamo l'esperienza e le competenze 
              per ogni tipo di ambiente produttivo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 [grid-auto-rows:1fr]">
            {industrialTypes.map((type, index) => (
              <ScrollReveal
                key={index}
                delay={index * 90}
                as="article"
                className="group flex h-full flex-col justify-between rounded-2xl border border-sky-200/70 bg-white/95 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{type.title}</h3>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-700 mb-4">{type.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-2">Servizi inclusi</h4>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-sky-700 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-sky-200 pt-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Settori serviti</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.sectors.map((sector, i) => (
                      <span key={i} className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Attrezzature Professionali
            </h2>
            <p className="text-lg text-slate-600">
              Utilizziamo solo macchinari industriali di ultima generazione per garantire 
              risultati superiori e massima efficienza.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 [grid-auto-rows:1fr]">
            {equipment.map((item, index) => (
              <ScrollReveal
                key={index}
                delay={index * 70}
                as="article"
                className="group flex h-full items-center gap-4 rounded-2xl border border-sky-200 bg-white/95 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-800 shadow-inner group-hover:bg-sky-200 transition-colors">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-slate-700 font-semibold leading-relaxed">{item}</span>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal as="div" className="mt-12 rounded-3xl border border-sky-200 bg-white/95 p-10 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Sicurezza e certificazioni
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Formazione del personale</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Sicurezza sul lavoro e uso DPI specifici</li>
                  <li>• Gestione sostanze chimiche industriali</li>
                  <li>• Procedure emergenza e lavoro in quota</li>
                  <li>• Coordinamento con responsabili HSE</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Certificazioni e abilitazioni</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• ISO 45001 e ISO 14001 per sicurezza e ambiente</li>
                  <li>• Abilitazioni spazi confinati e lavori in quota</li>
                  <li>• Autorizzazioni trasporto e smaltimento rifiuti</li>
                  <li>• Macchine certificate CE per uso industriale</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <LocationsGrid serviceSlug="pulizie-industriali" serviceName="Pulizie Industriali" showAll={false} />

      <RelatedBlogPosts serviceIds={['pulizie-industriali']} />

      <InternalLinkSection title="Collegamenti per responsabili di stabilimento" intro="Approfondisci rapidamente gli altri contenuti Artic Pulizie: elenco servizi, zone operative, recensioni clienti industriali e richiesta preventivo." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Migliora la Sicurezza del Tuo Stabilimento
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Affidati ai nostri esperti per pulizie industriali sicure ed efficaci. 
            Sopralluogo gratuito e preventivo personalizzato entro 24 ore.
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

export default PulizieIndustriali;
