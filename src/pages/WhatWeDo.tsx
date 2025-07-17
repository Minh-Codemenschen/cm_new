
import Header from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';

const WhatWeDo = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "WordPress Entwicklung Graz - Was wir tun";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <Helmet>
        <title>Codemenschen GmbH – Web- & App-Entwicklung mit KI</title>
        <meta name="description" content="Maßgeschneiderte Web- & Mobile-Lösungen mit über 10 Jahren Erfahrung. Wir entwickeln moderne, skalierbare Anwendungen mit KI-Integration. Jetzt kontaktieren!" />
        <meta name="keywords" content="Webentwicklung, App Entwicklung, Mobile App Agentur, KI Integration, WordPress Plugins, individuelle Softwareentwicklung, Webagentur Deutschland, Codemenschen GmbH, maßgeschneiderte Lösungen, E-Commerce Entwicklung, Cloud Anwendungen, Chatbot Integration, digitale Transformation" />
      </Helmet>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-secondary mb-8">{t('whatWeDo.title')}</h1>
          
          <p className="text-lg mb-8">
            {t('whatWeDo.intro')}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">{t('whatWeDo.services')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{t('whatWeDo.webDev')}</h3>
                <p>{t('whatWeDo.webDevDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{t('whatWeDo.mobileDev')}</h3>
                <p>{t('whatWeDo.mobileDevDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{t('whatWeDo.customSolutions')}</h3>
                <p>{t('whatWeDo.customDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{t('whatWeDo.aiIntegration')}</h3>
                <p>{t('whatWeDo.aiDesc')}</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">{t('whatWeDo.whyChoose')}</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{t('whatWeDo.experience')}</h3>
                <p>{t('whatWeDo.experienceDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{t('whatWeDo.modernTech')}</h3>
                <p>{t('whatWeDo.modernTechDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{t('whatWeDo.clientCentric')}</h3>
                <p>{t('whatWeDo.clientDesc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{t('whatWeDo.endToEnd')}</h3>
                <p>{t('whatWeDo.endToEndDesc')}</p>
              </div>
            </div>
          </section>

          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-4">
              {t('whatWeDo.conclusion')}
            </p>
            <p className="text-xl font-semibold text-primary">
              <a href="mailto:office@codemenschen.at" className="hover:underline">
                {t('whatWeDo.contactUs')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
