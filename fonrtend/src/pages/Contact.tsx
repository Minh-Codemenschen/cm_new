
import Header from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";

const Contact = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "WordPress Entwicklung Graz - Kontakt";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-secondary mb-8">{t('contact.title')}</h1>
        <div className="max-w-2xl mx-auto text-left">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Codemenschen GmbH</h2>
            <address className="not-italic space-y-2 text-gray-600">
              <p>Anton Hubmann Platz 1/6,</p>
              <p>8077 Gössendorf</p>
              <p>Firmenbuchnummer: FN 543274 h</p>
              <p>
                Email:{" "}
                <a href="mailto:office@codemenschen.at" className="text-blue-600 hover:underline">
                  office@codemenschen.at
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
