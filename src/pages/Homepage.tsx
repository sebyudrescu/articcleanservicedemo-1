import { ArrowRight, Sparkles, Shield, Clock, Award, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '@/components/ui/cta-with-rectangle';
import { serviceImagesByLink } from '@/data/serviceImages';

const Homepage = () => {
  const heroImage = serviceImagesByLink['/servizi/pulizie-uffici'];

  const services = [
    {
      title: "Pulizie Uffici",
      description: "Servizi completi di pulizia uffici a Brescia centro e provincia per spazi corporate e studi professionali.",
      icon: "🏢",
      features: ["Pulizia uffici Brescia", "Sanificazione postazioni lavoro", "Gestione rifiuti certificata"],
      link: "/servizi/pulizie-uffici",
      image: serviceImagesByLink['/servizi/pulizie-uffici'],
      alt: "Addetta alle pulizie che igienizza una scrivania in un ufficio a Brescia"
    },
    {
      title: "Pulizie Industriali",
      description: "Interventi specializzati di pulizie industriali a Brescia per capannoni, magazzini e linee produttive.",
      icon: "🏭",
      features: ["Pulizia capannoni Brescia", "Aspirazione industriale", "Trattamento pavimenti resinati"],
      link: "/servizi/pulizie-industriali",
      image: serviceImagesByLink['/servizi/pulizie-industriali'],
      alt: "Operatore che pulisce un capannone industriale a Brescia"
    },
    {
      title: "Pulizie Post-Cantiere",
      description: "Pulizie post cantiere e post ristrutturazione a Brescia con consegna rapida degli ambienti.",
      icon: "🔨",
      features: ["Rimozione detriti edili", "Pulizia finale Brescia", "Consegna immediata"],
      link: "/servizi/pulizie-post-cantiere",
      image: serviceImagesByLink['/servizi/pulizie-post-cantiere'],
      alt: "Tecnici che rifiniscono la pulizia post ristrutturazione"
    },
    {
      title: "Pulizie Vetri e Vetrate",
      description: "Servizio specializzato per vetri, vetrate e vetrine di negozi a Brescia e provincia.",
      icon: "✨",
      features: ["Vetri senza aloni Brescia", "Interventi in altezza", "Grandi superfici commerciali"],
      link: "/servizi/pulizie-vetri",
      image: serviceImagesByLink['/servizi/pulizie-vetri'],
      alt: "Addetto che pulisce grandi vetrate di un negozio"
    },
    {
      title: "Sanificazione Ambienti",
      description: "Trattamenti certificati di sanificazione a Brescia con tecnologie ozono e vapore per ambienti di lavoro.",
      icon: "🦠",
      features: ["Sanificazione ozono Brescia", "Prodotti ecologici", "Protocolli sicurezza"],
      link: "/servizi/sanificazione-ambienti",
      image: "https://images.pexels.com/photos/4099465/pexels-photo-4099465.jpeg?auto=compress&cs=tinysrgb&w=1280",
      alt: "Operatore che sanifica con nebulizzatore un ambiente di lavoro"
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "15+ Anni di Esperienza",
      description: "Un team esperto al servizio delle aziende di Brescia con competenze certificate e formazione continua."
    },
    {
      icon: Clock,
      title: "Puntualità Garantita",
      description: "Rispettiamo sempre gli orari concordati con turni flessibili per uffici e negozi a Brescia."
    },
    {
      icon: Shield,
      title: "Prodotti Ecologici",
      description: "Utilizziamo detergenti ecologici certificati, sicuri per ambienti civili e industriali a Brescia."
    },
    {
      icon: Users,
      title: "Personale Qualificato",
      description: "Staff formato e aggiornato sui migliori standard di qualità e sicurezza nel settore pulizie Brescia."
    }
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      company: "TechCorp Milano",
      text: "Arctic Clean si occupa dei nostri uffici da 3 anni. Professionalità e qualità eccellenti, il nostro team lavora sempre in un ambiente perfetto.",
      rating: 5,
      role: "Responsabile Facilities"
    },
    {
      name: "Laura Bianchi", 
      company: "Studio Legale Associato",
      text: "Servizio impeccabile e puntuale. I clienti apprezzano sempre la pulizia dei nostri locali. Consiglio vivamente Arctic Clean.",
      rating: 5,
      role: "Partner"
    },
    {
      name: "Giuseppe Verdi",
      company: "Industrie Meccaniche Spa",
      text: "Per i nostri capannoni industriali, Arctic Clean garantisce standard elevati di pulizia e sicurezza. Un partner affidabile.",
      rating: 5,
      role: "Direttore Operativo"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-75"
            loading="eager"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-sky-900/80 to-teal-900/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
            <div className="space-y-6 sm:space-y-7">
              <h1 className="text-white text-[clamp(2.35rem,6vw,3.9rem)] font-extrabold leading-[1.08] tracking-tight">
                <span className="block">Impresa di pulizie</span>
                <span className="block">professionali a</span>
                <span className="block">Brescia e provincia</span>
              </h1>
              <h2 className="text-slate-100 text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto">
                Dal 2005 offriamo servizi di pulizia certificati per aziende, condomini e ambienti industriali.
                <br className="hidden sm:block" />
                Squadre qualificate, interventi programmati ed emergenze 24/7.
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 mt-8 max-w-sm sm:max-w-none mx-auto">
              <Link to="/richiedi-preventivo">
                <button
                  aria-label="Richiedi un preventivo di pulizie gratuito a Brescia"
                  className="primary-cta-button group relative overflow-hidden w-full sm:w-auto max-w-sm sm:max-w-none px-6 sm:px-8 py-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 min-h-[52px] sm:min-h-[56px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-300 group-hover:from-emerald-400 group-hover:via-teal-400 group-hover:to-cyan-400"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                  <div className="relative z-10 flex items-center justify-center gap-2 px-3 sm:px-6 py-2 sm:py-3">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-bold text-base sm:text-lg lg:text-xl text-white text-center">
                      Richiedi Preventivo Gratuito
                    </span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  <div className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:scale-105 group-hover:border-white/50 transition-all duration-300"></div>
                </button>
              </Link>

              <Link to="/servizi">
                <button
                  aria-label="Scopri tutti i servizi di pulizia a Brescia"
                  className="white-bg-button group relative overflow-hidden transition-all duration-300 transform perspective-1000 hover:-translate-y-0.5 shadow-lg hover:shadow-xl w-full sm:w-auto max-w-sm sm:max-w-none px-6 sm:px-8 py-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 min-h-[52px] sm:min-h-[56px]"
                >
                  {/* Background completamente bianco */}
                  <div className="absolute inset-0 bg-white rounded-lg"></div>

                  {/* Border gradient */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-300 via-cyan-400 to-teal-400 p-[2px] group-hover:from-sky-400 group-hover:via-cyan-500 group-hover:to-teal-500">
                    <div className="h-full w-full rounded-[10px] bg-white"></div>
                  </div>
                  
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
                  
                  <div className="relative z-10 flex items-center justify-center gap-2 px-3 sm:px-6 py-2 sm:py-3">
                    <span className="font-bold text-base sm:text-lg lg:text-xl text-slate-700 group-hover:text-sky-700 transition-colors duration-300 text-center">
                      Scopri i Nostri Servizi
                    </span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-sky-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 text-sm sm:text-base text-slate-100 px-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                <span>Preventivo pulizie Brescia in 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sky-300 rounded-full"></div>
                <span>Oltre 200 aziende servite a Brescia e provincia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-300 rounded-full"></div>
                <span>Squadre dedicate con formazione certificata</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                <span>Copertura emergenze e interventi programmati</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              I Nostri <span className="text-sky-500">Servizi</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Soluzioni complete per ogni esigenza di pulizia aziendale a Brescia,
              con personale qualificato e attrezzature professionali certificate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-slate-50 rounded-2xl overflow-hidden hover:bg-white transition-all duration-300 border border-transparent hover:border-sky-100 cursor-pointer shadow-sm hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent p-4 flex items-center justify-start">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-sky-600 font-semibold group-hover:text-sky-700 transition-colors pt-2">
                    <span>Scopri di più</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
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
              Perché Scegliere <span className="text-sky-500">Arctic Clean</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Qualità superiore, affidabilità e attenzione ai dettagli che ci distinguono
              come impresa di pulizie professionali leader a Brescia.
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
        title="Pronto a iniziare con Arctic Clean?"
        description="Contattaci oggi per un preventivo personalizzato e gratuito. Il nostro team di esperti ti fornirà una soluzione su misura per le tue esigenze di pulizia aziendale a Brescia."
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
