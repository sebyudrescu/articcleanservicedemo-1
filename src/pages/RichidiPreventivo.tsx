import { useState } from 'react';
import { FileText, Phone, Send, User, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import InternalLinkSection from '@/components/InternalLinkSection';
import { buildCanonicalUrl, siteMetadata } from '@/data/siteMetadata';
import { buildBreadcrumbSchema } from '@/utils/structuredData';

const RichidiPreventivo = () => {
  const [formData, setFormData] = useState({
    Nome: '',
    Cognome: '',
    Email: '',
    'Numero di Telefono': '',
    'Nome Azienda': '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showThankYou, setShowThankYou] = useState(false);

  const canonicalUrl = buildCanonicalUrl('/richiedi-preventivo');
  const seoConfig = {
    title: 'Richiedi Preventivo Pulizie a Brescia | Artic Pulizie',
    description:
      'Richiedi un preventivo gratuito per le pulizie Artic Pulizie a Brescia. Compila il modulo e ricevi una proposta personalizzata in 24 ore.',
    keywords:
      'preventivo pulizie brescia, richiedi preventivo artic pulizie, preventivo impresa pulizie, sopralluogo gratuito pulizie',
    canonical: canonicalUrl,
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: `${siteMetadata.siteName} - Richiedi Preventivo`,
        url: canonicalUrl,
        description: 'Modulo per richiedere un preventivo gratuito ai consulenti Artic Pulizie.'
      },
      buildBreadcrumbSchema([{ name: 'Richiedi Preventivo', path: '/richiedi-preventivo' }])
    ].filter(Boolean) as Record<string, unknown>[]
  };

  if (showThankYou) {
    return (
      <>
        <SEO {...seoConfig} />
        <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                Richiesta Inviata con Successo!
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                Grazie per aver richiesto un preventivo. Il nostro team ti contatterà entro 24 ore
                per fornirti una proposta personalizzata.
              </p>
              <div className="bg-sky-50 rounded-lg p-4 mb-6 text-left">
                <p className="text-sky-800 font-semibold">
                  📞 Telefono: +39 030 52 31 285
                </p>
                <p className="text-sky-700">
                  📧 Email: info@articpulizie.it
                </p>
                <p className="text-sky-700">
                  📍 Via Carpaccio 10, Brescia
                </p>
              </div>
              <a
                href="/"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300"
              >
                <span>Torna alla Home</span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO {...seoConfig} />
      <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <FileText className="w-8 h-8 text-sky-700" />
              <span className="text-sky-700 font-semibold uppercase tracking-[0.3em]">
                Richiesta Preventivo
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Richiedi <span className="text-sky-700">Preventivo</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-4">
              Compila il modulo per ricevere un preventivo gratuito e personalizzato.
              Ti contatteremo entro 24 ore per discutere le tue esigenze.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-cyan-500 p-6">
              <h2 className="text-2xl font-bold text-white">Dati della Richiesta</h2>
              <p className="text-sky-100">Tutti i campi contrassegnati con * sono obbligatori</p>
            </div>

            <form
              action="/api/submit"
              method="POST"
              className="p-8 space-y-8"
              onSubmit={async (event) => {
                event.preventDefault();
                setIsSubmitting(true);
                setSubmitStatus('idle');

                try {
                  const payload = new URLSearchParams();
                  Object.entries(formData).forEach(([key, value]) => {
                    payload.append(key, value);
                  });

                  const response = await fetch('/api/submit', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: payload.toString()
                  });

                  if (response.ok) {
                    setSubmitStatus('success');
                    setFormData({
                      Nome: '',
                      Cognome: '',
                      Email: '',
                      'Numero di Telefono': '',
                      'Nome Azienda': '',
                      website: ''
                    });
                  } else {
                    setSubmitStatus('error');
                  }
                } catch (error) {
                  console.error('Errore invio form:', error);
                  setSubmitStatus('error');
                } finally {
                  setIsSubmitting(false);
                  setShowThankYou(true);
                }
              }}
            >
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
                value={formData.website}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    website: e.target.value
                  }))
                }
              />

              {/* Dati personali */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-sky-700" />
                  Dati Personali
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="Nome"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      placeholder="Il tuo nome"
                      value={formData.Nome}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          Nome: e.target.value
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      name="Cognome"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      placeholder="Il tuo cognome"
                      value={formData.Cognome}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          Cognome: e.target.value
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Contatti */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-sky-700" />
                  Informazioni di Contatto
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      placeholder="la-tua-email@esempio.it"
                      value={formData.Email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          Email: e.target.value
                        }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Numero di Telefono *
                    </label>
                    <input
                      type="tel"
                      name="Numero di Telefono"
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      placeholder="+39 123 456 7890"
                      value={formData['Numero di Telefono']}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          'Numero di Telefono': e.target.value
                        }))
                      }
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Nome Azienda
                    </label>
                    <input
                      type="text"
                      name="Nome Azienda"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                      placeholder="Nome dell'azienda (opzionale)"
                      value={formData['Nome Azienda']}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          'Nome Azienda': e.target.value
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Invio in corso...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Invia Richiesta</span>
                    </>
                  )}
                </button>
                <div className="text-center text-sm mt-4 min-h-[1.25rem]" aria-live="polite">
                  {submitStatus === 'error' ? (
                    <p className="text-red-600 font-semibold">
                      Si è verificato un errore. Riprova più tardi.
                    </p>
                  ) : (
                    <p className="text-slate-500">
                      Dopo l&apos;invio verrai contattato entro 24 ore con un preventivo dedicato.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-sky-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Cosa Succede Dopo?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  1
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Analisi Richiesta</h4>
                <p className="text-slate-600 text-sm">
                  Valutiamo le tue esigenze e prepariamo una proposta
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  2
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Sopralluogo</h4>
                <p className="text-slate-600 text-sm">
                  Se necessario, fissiamo un appuntamento gratuito
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                  3
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Preventivo</h4>
                <p className="text-slate-600 text-sm">
                  Ricevi una proposta dettagliata e personalizzata
                </p>
              </div>
            </div>
          </div>

          <InternalLinkSection
            title="Collegamenti utili dopo la richiesta"
            intro="Approfondisci i servizi Artic Pulizie, consulta le aree servite, leggi le recensioni e valuta altre soluzioni prima di ricevere il preventivo."
          />
        </div>
      </div>
    </>
  );
};

export default RichidiPreventivo;
