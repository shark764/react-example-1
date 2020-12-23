import React from 'react';
import { IntlProvider } from 'react-intl-hooks';
import { useSelector } from 'react-redux';
import locale_en from './translations/en.json';
import locale_es from './translations/es.json';
import locale_fr from './translations/fr.json';
import locale_de from './translations/de.json';

const data = {
  es: locale_es,
  en: locale_en,
  fr: locale_fr,
  de: locale_de,
};

function LanguageProvider(props) {
  const language = useSelector((state) => state.configuration.language);

  return (
    <IntlProvider
      locale={language}
      messages={data[language]}
      defaultLocale="en"
    >
      {props.children}
    </IntlProvider>
  );
}

export default LanguageProvider;
