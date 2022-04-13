import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {AppProvider} from './context'

//internationalization
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';



i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en','pl','de'],
    fallbackLng: "pl",
    detection:{
      order: ['cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
      caches:['cookie'],
    },
    backend: {
      loadPath: '/translation/{{lng}}.json'
    },
    react: { useSuspense: false},
  });



ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
