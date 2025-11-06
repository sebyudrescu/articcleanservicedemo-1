import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="site-footer" className="bg-slate-900 text-white" aria-label="Informazioni di contatto Artic Pulizie">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <div className="h-20 md:h-24 flex items-center">
                <img
                  src="/assets/logo.webp"
                  alt="Artic Clean logo"
                  className="h-full w-auto max-w-[15rem] md:max-w-[18rem] object-contain"
                  width={528}
                  height={216}
                  loading="lazy"
                />
              </div>
            </Link>
            <p className="text-slate-300 leading-relaxed">
              Impresa di pulizie a Brescia specializzata in uffici, condomini, industrie e sanificazioni.
              Squadre certificate, sopralluoghi rapidi e preventivo in 24 ore in tutta la provincia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2 text-slate-200">
              <li>
                <Link
                  to="/servizi/pulizie-uffici"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Pulizie Uffici
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi/pulizie-condomini"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Pulizie Condomini
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi/pulizie-industriali"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Pulizie Industriali
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi/pulizie-post-cantiere"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Pulizie Post-Cantiere
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi/pulizie-vetri"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Pulizie Vetri
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi/sanificazione-ambienti"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Sanificazione Ambienti
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi/giardinaggio"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Giardinaggio
                </Link>
              </li>
              <li>
                <Link
                  to="/servizi/gestione-carrellati"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Gestione Carrellati
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Azienda</h3>
            <ul className="space-y-2 text-slate-200">
              <li>
                <Link
                  to="/chi-siamo"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link
                  to="/come-lavoriamo"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Come Lavoriamo
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/recensioni"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Recensioni
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-emerald-300 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <div className="space-y-3 text-slate-200">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-300" />
                <a
                  href="tel:+390305231285"
                  className="font-semibold text-white hover:text-emerald-200 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  +39 030 52 31 285
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-300" />
                <a
                  href="mailto:info@articpulizie.it"
                  className="font-semibold text-white hover:text-emerald-200 focus-visible:text-emerald-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  info@articpulizie.it
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-emerald-300" />
                <span className="text-slate-100">Via Carpaccio 10, 25100 Brescia</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-400">
              <p className="font-semibold text-slate-200 mb-1">Orari:</p>
              <p className="text-slate-300">Lunedì - Venerdì: 8:00 - 17:00</p>
              <p className="text-slate-300">Sabato: 8:00 - 13:00</p>
              <p className="text-slate-300">Domenica: Chiuso</p>
              <p className="mt-2 text-emerald-300 font-semibold">Pronto intervento: tutti i giorni (escluso domenica)</p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Seguici</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  aria-label="Profilo Facebook"
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Profilo Instagram"
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Profilo LinkedIn"
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Artic Pulizie Srl · Via Carpaccio 10, 25100 Brescia · Zona operativa: Brescia e provincia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
