import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

const availableLangs = [
  'pt',
  'en',
];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    localStorage.getItem('lang') || (navigator.language.startsWith('pt') ? 'pt' : 'en')
  );

  useEffect(() => {
  const seo = translations[lang].seo;

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.title = seo.title;

  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', seo.description);

  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute('content', seo.ogTitle);

  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute('content', seo.ogDescription);

  document
    .querySelector('meta[property="og:locale"]')
    ?.setAttribute('content', seo.locale);
}, [lang]);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const toggleLang = () => {
    const currentIndex = availableLangs.indexOf(lang);
    const nextIndex = (currentIndex + 1) % availableLangs.length;
    changeLang(availableLangs[nextIndex]);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, changeLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);