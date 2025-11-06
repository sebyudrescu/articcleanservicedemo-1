import { useEffect, useState } from 'react';

type ConsentState = 'granted' | 'denied' | null;

const STORAGE_KEY = 'articConsent';

const ConsentBanner = () => {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentState;
      if (stored === 'granted') {
        setConsent('granted');
        window.dispatchEvent(new Event('articConsentGranted'));
        return;
      }
      if (stored === 'denied') {
        setConsent('denied');
        return;
      }
    } catch (error) {
      console.warn('Unable to read consent preference', error);
    }

    setVisible(true);
  }, []);

  const handleChoice = (value: Exclude<ConsentState, null>) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (error) {
      console.warn('Unable to persist consent preference', error);
    }

    setConsent(value);
    setVisible(false);

    if (value === 'granted') {
      window.dispatchEvent(new Event('articConsentGranted'));
    }
  };

  if (!visible || consent === 'granted') {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:pb-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-slate-900/95 px-5 py-4 shadow-2xl sm:px-6 sm:py-5">
        <div className="flex flex-col items-start gap-4 text-slate-200 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Preferenze cookie</p>
            <p className="mt-1 text-sm text-slate-300">
              Usiamo Google Analytics per migliorare il sito. Puoi acconsentire al tracciamento o rifiutarlo: caricheremo gli script solo dopo la tua scelta.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <button
              type="button"
              className="rounded-lg border border-slate-400 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-200 hover:text-white"
              onClick={() => handleChoice('denied')}
            >
              Rifiuta
            </button>
            <button
              type="button"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
              onClick={() => handleChoice('granted')}
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
