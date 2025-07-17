
import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.plugins': 'Premium WordPress Plugins',
    'header.whatWeDo': 'What We Do',
    'header.contact': 'Contact',
    'header.imprint': 'Imprint',
    'header.login': 'Login',
    
    // Index page
    'index.whoWeAre': 'Who We Are',
    'index.heroText': 'For over 10 years, we have been developing modern web and app solutions in Graz, as well as custom WordPress plugins – especially for businesses. With our agile approach, quick changes and adjustments are always possible. We deliver functional, tailor-made solutions that digitally advance your business.',
    'index.featuredPlugin': 'Featured Plugin of the Month',
    'index.featuredDescription': 'Discover our handpicked selection of exceptional WordPress plugins that can transform your website. Each month, we highlight a plugin that stands out for its innovation, reliability, and user experience.',
    'index.learnMore': 'Learn More',
    'index.downloadNow': 'Download Now',
    
    // Plugin detail
    'plugin.backToPlugins': 'Back to Plugins',
    'plugin.downloads': 'downloads',
    'plugin.rating': 'rating',
    'plugin.purchaseNow': 'Purchase Now',
    'plugin.downloadFree': 'Download Free Version',
    'plugin.viewWordPress': 'View on WordPress.org',
    
    // Checkout
    'checkout.title': 'Checkout',
    'checkout.orderSummary': 'Order Summary',
    'checkout.premiumVersion': 'Premium Version',
    'checkout.billingInfo': 'Billing Information',
    'checkout.firstName': 'First Name',
    'checkout.lastName': 'Last Name',
    'checkout.email': 'Email',
    'checkout.company': 'Company (Optional)',
    'checkout.address': 'Address',
    'checkout.city': 'City',
    'checkout.country': 'Country',
    'checkout.postalCode': 'Postal Code',
    'checkout.completePurchase': 'Complete Purchase',
    'checkout.processing': 'Processing...',
    'checkout.noPlugin': 'No plugin selected',
    'checkout.returnToPlugins': 'Return to Plugins',
    
    // Contact
    'contact.title': 'Contact Us',
    
    // What We Do
    'whatWeDo.title': 'Web and App Development – Transforming Ideas into Digital Solutions',
    'whatWeDo.intro': 'At Codemenschen GmbH, we specialize in crafting custom web and mobile applications that deliver results. With over a decade of experience, we use the latest technologies and AI-powered tools to bring your ideas to life.',
    'whatWeDo.services': 'Our Services',
    'whatWeDo.webDev': 'Web Development',
    'whatWeDo.webDevDesc': 'Build fast, secure, and scalable websites tailored to your needs.',
    'whatWeDo.mobileDev': 'Mobile App Development',
    'whatWeDo.mobileDevDesc': 'Create intuitive and engaging apps for iOS and Android platforms.',
    'whatWeDo.customSolutions': 'Custom Solutions',
    'whatWeDo.customDesc': 'From e-commerce to enterprise tools, we develop solutions that align with your business goals.',
    'whatWeDo.aiIntegration': 'AI Integration',
    'whatWeDo.aiDesc': 'Enhance your applications with AI-driven features, including chatbots, data analytics, and personalization.',
    'whatWeDo.whyChoose': 'Why Choose Us?',
    'whatWeDo.experience': '10+ Years of Experience',
    'whatWeDo.experienceDesc': 'Proven expertise in delivering high-quality web and app solutions.',
    'whatWeDo.modernTech': 'Modern Technologies',
    'whatWeDo.modernTechDesc': 'Stay ahead with the latest frameworks, cloud platforms, and design trends.',
    'whatWeDo.clientCentric': 'Client-Centric Approach',
    'whatWeDo.clientDesc': 'Your vision is our priority. We work closely with you to achieve your goals.',
    'whatWeDo.endToEnd': 'End-to-End Development',
    'whatWeDo.endToEndDesc': 'From ideation to launch, we handle every step of the process.',
    'whatWeDo.conclusion': 'Whether you\'re a startup or an established business, we\'re here to help you scale and succeed in the digital age.',
    'whatWeDo.contactUs': '📩 Contact Codemenschen GmbH today to kickstart your next web or app project!',
  },
  de: {
    // Header
    'header.plugins': 'Premium WordPress Plugins',
    'header.whatWeDo': 'Was wir tun',
    'header.contact': 'Kontakt',
    'header.imprint': 'Impressum',
    'header.login': 'Anmelden',
    
    // Index page
    'index.whoWeAre': 'Wer wir sind',
    'index.heroText': 'Seit über 10 Jahren entwickeln wir in Graz moderne Web- und App-Lösungen sowie individuelle WordPress-Plugins – speziell für Unternehmen. Mit unserem agilen Ansatz sind schnelle Änderungen und Anpassungen jederzeit möglich. Wir liefern funktionale, maßgeschneiderte Lösungen, die Ihr Business digital voranbringen.',
    'index.featuredPlugin': 'Plugin des Monats',
    'index.featuredDescription': 'Entdecken Sie unsere handverlesene Auswahl außergewöhnlicher WordPress-Plugins, die Ihre Website transformieren können. Jeden Monat heben wir ein Plugin hervor, das sich durch Innovation, Zuverlässigkeit und Benutzererfahrung auszeichnet.',
    'index.learnMore': 'Mehr erfahren',
    'index.downloadNow': 'Jetzt herunterladen',
    
    // Plugin detail
    'plugin.backToPlugins': 'Zurück zu Plugins',
    'plugin.downloads': 'Downloads',
    'plugin.rating': 'Bewertung',
    'plugin.purchaseNow': 'Jetzt kaufen',
    'plugin.downloadFree': 'Kostenlose Version herunterladen',
    'plugin.viewWordPress': 'Auf WordPress.org ansehen',
    
    // Checkout
    'checkout.title': 'Kasse',
    'checkout.orderSummary': 'Bestellübersicht',
    'checkout.premiumVersion': 'Premium Version',
    'checkout.billingInfo': 'Rechnungsinformationen',
    'checkout.firstName': 'Vorname',
    'checkout.lastName': 'Nachname',
    'checkout.email': 'E-Mail',
    'checkout.company': 'Firma (Optional)',
    'checkout.address': 'Adresse',
    'checkout.city': 'Stadt',
    'checkout.country': 'Land',
    'checkout.postalCode': 'Postleitzahl',
    'checkout.completePurchase': 'Kauf abschließen',
    'checkout.processing': 'Verarbeitung...',
    'checkout.noPlugin': 'Kein Plugin ausgewählt',
    'checkout.returnToPlugins': 'Zurück zu Plugins',
    
    // Contact
    'contact.title': 'Kontaktieren Sie uns',
    
    // What We Do
    'whatWeDo.title': 'Web- und App-Entwicklung – Ideen in digitale Lösungen verwandeln',
    'whatWeDo.intro': 'Bei der Codemenschen GmbH spezialisieren wir uns auf die Entwicklung maßgeschneiderter Web- und Mobile-Anwendungen, die Ergebnisse liefern. Mit über einem Jahrzehnt Erfahrung verwenden wir die neuesten Technologien und KI-gestützte Tools, um Ihre Ideen zum Leben zu erwecken.',
    'whatWeDo.services': 'Unsere Dienstleistungen',
    'whatWeDo.webDev': 'Webentwicklung',
    'whatWeDo.webDevDesc': 'Erstellen Sie schnelle, sichere und skalierbare Websites, die auf Ihre Bedürfnisse zugeschnitten sind.',
    'whatWeDo.mobileDev': 'Mobile App-Entwicklung',
    'whatWeDo.mobileDevDesc': 'Erstellen Sie intuitive und ansprechende Apps für iOS- und Android-Plattformen.',
    'whatWeDo.customSolutions': 'Maßgeschneiderte Lösungen',
    'whatWeDo.customDesc': 'Von E-Commerce bis zu Unternehmenstools entwickeln wir Lösungen, die mit Ihren Geschäftszielen übereinstimmen.',
    'whatWeDo.aiIntegration': 'KI-Integration',
    'whatWeDo.aiDesc': 'Erweitern Sie Ihre Anwendungen mit KI-gesteuerten Funktionen wie Chatbots, Datenanalyse und Personalisierung.',
    'whatWeDo.whyChoose': 'Warum uns wählen?',
    'whatWeDo.experience': '10+ Jahre Erfahrung',
    'whatWeDo.experienceDesc': 'Bewährte Expertise bei der Bereitstellung hochwertiger Web- und App-Lösungen.',
    'whatWeDo.modernTech': 'Moderne Technologien',
    'whatWeDo.modernTechDesc': 'Bleiben Sie mit den neuesten Frameworks, Cloud-Plattformen und Design-Trends vorne.',
    'whatWeDo.clientCentric': 'Kundenorientierter Ansatz',
    'whatWeDo.clientDesc': 'Ihre Vision ist unsere Priorität. Wir arbeiten eng mit Ihnen zusammen, um Ihre Ziele zu erreichen.',
    'whatWeDo.endToEnd': 'End-to-End-Entwicklung',
    'whatWeDo.endToEndDesc': 'Von der Ideenfindung bis zum Launch übernehmen wir jeden Schritt des Prozesses.',
    'whatWeDo.conclusion': 'Ob Sie ein Startup oder ein etabliertes Unternehmen sind, wir helfen Ihnen beim Wachsen und Erfolg im digitalen Zeitalter.',
    'whatWeDo.contactUs': '📩 Kontaktieren Sie die Codemenschen GmbH noch heute, um Ihr nächstes Web- oder App-Projekt zu starten!',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
