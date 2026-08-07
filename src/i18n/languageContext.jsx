import { createContext, useContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

const availableLangs = [
    'pt',
    'en',
]

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    localStorage.getItem('lang') || (navigator.language.startsWith('pt') ? 'pt' : 'en')
  );

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const toggleLang = () => {
    const currentIndex = availableLangs.indexOf(lang);
    const nextIndex = (currentIndex + 1) % availableLangs.length;
    const nextLang = availableLangs[nextIndex];

    setLang(nextLang);
    localStorage.setItem('lang', nextLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, changeLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);