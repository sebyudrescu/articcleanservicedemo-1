import { Building2, CheckCircle, ArrowRight, Users, Clock, Shield, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import LocationsGrid from '@/components/LocationsGrid';
import InternalLinkSection from '@/components/InternalLinkSection';
import LazyImage from '@/components/LazyImage';
import RelatedBlogPosts from '@/components/RelatedBlogPosts';
import ScrollReveal from '@/components/ScrollReveal';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { pulizieUfficiImage } from '@/data/serviceImages';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/utils/structuredData';

const faqItems = [
  {
    question: 'Come funziona il servizio di pulizie uffici a Brescia?',
    answer:
      'Effettuiamo un sopralluogo gratuito, definiamo un piano personalizzato e programmiamo gli interventi con personale dedicato Artic Pulizie.'
  },
  {
    question: 'Utilizzate prodotti certificati per gli uffici?',
    answer:
      'Sì, impieghiamo detergenti professionali certificati e protocolli conformi alle norme igienico-sanitarie.'
  },
  {
    question: 'Quali orari sono disponibili per la pulizia degli uffici?',
    answer:
      'Programmiamo interventi serali, mattutini o nel weekend per non interferire con l’attività lavorativa.'
  }
];

const PulizieUffici = () => {
  const features = [
    "Pulizia quotidiana postazioni di lavoro",
    "Sanificazione bagni e aree comuni",
    "Pulizia vetri interni ed esterni",
    "Gestione rifiuti e raccolta differenziata",
    "Aspirazione tappeti e moquette",
    "Pulizia e disinfezione superfici",
    "Pulizia sale riunioni e aree break",
    "Manutenzione aree reception e ingresso"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Ambiente Professionale",
      description: "Uffici sempre puliti che trasmettono professionalità a clienti e collaboratori"
    },
    {
      icon: Clock,
      title: "Puntualità Garantita",
      description: "Interventi programmati negli orari concordati senza interferire con il lavoro"
    },
    {
      icon: Shield,
      title: "Prodotti Certificati",
      description: "Utilizziamo solo detergenti professionali ad alta efficacia sgrassante"
    },
    {
      icon: Sparkles,
      title: "Personale Qualificato",
      description: "Team formato con oltre 28 operatori esperti a vostra disposizione"
    }
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Pulizie uffici a Brescia',
      serviceType: 'Pulizie Uffici',
      description:
        'Servizi completi di pulizia e sanificazione uffici a Brescia e provincia con personale qualificato e prodotti certificati.',
      url: '/servizi/pulizie-uffici',
      areaServed: 'Brescia',
      offers: features
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: 'Pulizie Uffici', path: '/servizi/pulizie-uffici' }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Pulizie Uffici a Brescia | Artic Pulizie"
        description="Pulizia uffici a Brescia e provincia con team dedicato, prodotti certificati e orari flessibili. Artic Pulizie offre preventivo gratuito in 24 ore."
        keywords="pulizie uffici brescia, pulizie uffici brescia centro, impresa pulizie uffici brescia, pulizia uffici aziende brescia, sanificazione uffici artic pulizie"
        canonical={buildCanonicalUrl('/servizi/pulizie-uffici')}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Building2 className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Pulizie Uffici a Brescia – Servizi Professionali per Aziende e Studi nel Centro e in Provincia
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                Offriamo servizi di <strong>pulizia uffici a Brescia e provincia</strong> con personale qualificato,
                attrezzature professionali e prodotti ad alta efficacia. Copriamo quotidianamente il <strong>centro di Brescia</strong>
                con interventi serali e pre-apertura per sedi direzionali, coworking e studi professionali.
                La nostra impresa garantisce ambienti sempre puliti e ordinati per aziende e team ibridi.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Con oltre <strong>28 dipendenti qualificati</strong>, operiamo in tutta la provincia di Brescia
                offrendo contratti flessibili e sopralluoghi gratuiti.
              </p>
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Richiedi Preventivo Gratuito</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <LazyImage
                src={pulizieUfficiImage}
                alt="Addetta alle pulizie che igienizza una scrivania in un ufficio a Brescia"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                width={640}
                height={540}
                fallbackSrc={pulizieUfficiImage}
                sizes="(min-width: 1024px) 540px, 90vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section id="centro" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Pulizie Professionali per Uffici a Brescia e Provincia
          </h2>
          <div className="prose prose-lg text-slate-600 space-y-4">
            <p>
              La nostra impresa di pulizie è specializzata nella <strong>pulizia e sanificazione di uffici</strong> a
              Brescia e in tutta la provincia. Serviamo quotidianamente aziende, studi professionali, uffici pubblici
              e spazi di coworking con un servizio puntuale e di alta qualità.
            </p>
            <p>
              Siamo presenti nel <strong>centro storico di Brescia</strong>, da Piazza Loggia al Quartiere Carmine,
              garantendo <strong>pulizie uffici Brescia centro</strong> con finestre dedicate per ingressi mattutini,
              interventi serali e supporto nei giorni festivi.
            </p>
            <p>
              Sappiamo quanto sia importante lavorare in un ambiente pulito e ordinato. Per questo motivo, il nostro
              team di operatori qualificati utilizza <strong>prodotti professionali ad alta efficacia sgrassante</strong> e
              attrezzature moderne per garantire risultati impeccabili in ogni intervento.
            </p>
            <p>
              Operiamo con <strong>contratti flessibili</strong>: puoi scegliere tra interventi singoli, pulizie settimanali
              o contratti periodici programmati. Ogni servizio è personalizzato in base alle tue esigenze specifiche.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Cosa Include il Nostro Servizio di Pulizia Uffici
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un servizio completo che copre ogni aspetto della pulizia professionale per il tuo ufficio a Brescia
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Vantaggi delle Pulizie Professionali per Uffici
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Perché scegliere la nostra impresa per la pulizia dei tuoi uffici a Brescia
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

      {/* Service Area */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal as="div" className="bg-white rounded-2xl border border-sky-200/70 p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="w-6 h-6 text-sky-500" />
              <h2 className="text-2xl font-bold text-slate-900">
                Zona Operativa: Brescia e Provincia
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Operiamo in tutta la città di <strong>Brescia</strong> e nei comuni della provincia, garantendo
              puntualità e professionalità in ogni intervento. I nostri servizi di pulizia uffici sono disponibili
              sia per piccoli studi professionali che per grandi aziende in tutta la <strong>provincia di Brescia</strong>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Perché Scegliere i Nostri Servizi di Pulizia Uffici
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 [grid-auto-rows:1fr]">
            {[
              {
                title: 'Esperienza e Professionalità',
                body:
                  '28 operatori specializzati con protocolli consolidati per aziende, studi professionali e sedi corporate in tutta Brescia.'
              },
              {
                title: 'Attrezzature Certificate',
                body:
                  'Macchinari HEPA, prodotti sanificanti e detergenti a bassa emissione selezionati per ambienti di lavoro moderni.'
              },
              {
                title: 'Flessibilità Totale',
                body:
                  'Turni serali, mattutini o nel weekend programmati con il tuo referente Artic per garantire continuità operativa.'
              },
              {
                title: 'Preventivi Trasparenti',
                body:
                  'Piani su misura con reportistica, KPI e sopralluoghi gratuiti per monitorare qualità e ottimizzare costi.'
              }
            ].map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index * 90}
                as="article"
                className="group flex h-full flex-col rounded-2xl border border-sky-200/70 bg-white/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 mb-3">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <LocationsGrid serviceSlug="pulizie-uffici" serviceName="Pulizie Uffici" showAll={false} />

      <RelatedBlogPosts serviceIds={['pulizie-uffici']} />

      <InternalLinkSection title="Collegamenti utili per i servizi di pulizia uffici" intro="Accedi rapidamente alle pagine chiave di Artic Pulizie per approfondire servizi, zone coperte, recensioni e preventivi." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Contattaci per un Preventivo Gratuito a Brescia e Provincia
          </h2>
          <p className="text-xl text-slate-300 mb-4 leading-relaxed">
            Offriamo <strong>sopralluoghi gratuiti</strong> per valutare le tue esigenze e proporti
            la soluzione più adatta al tuo ufficio o studio professionale.
          </p>
          <p className="text-lg text-slate-400 mb-8">
            Servizio attivo in tutta Brescia e provincia con risposta entro 24 ore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/richiedi-preventivo"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Richiedi Preventivo Gratuito</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contattaci Ora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PulizieUffici;
