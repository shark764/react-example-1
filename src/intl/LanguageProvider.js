import React from 'react';
import { IntlProvider } from 'react-intl-hooks';
import { useSelector } from 'react-redux';
import localeEn from './translations/en.json';
import localeEs from './translations/es.json';
import localeFr from './translations/fr.json';
import localeDe from './translations/de.json';

const data = {
  es: localeEs,
  en: localeEn,
  fr: localeFr,
  de: localeDe,
};

function LanguageProvider({ children }) {
  const language = useSelector((state) => state.configuration.language);

  return (
    <IntlProvider
      locale={language}
      messages={data[language]}
      defaultLocale="en"
    >
      {children}
    </IntlProvider>
  );
}

export default LanguageProvider;
