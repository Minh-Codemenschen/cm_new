
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="flex items-center gap-2 px-3 py-1"
      >
        <span className="text-lg">🇬🇧</span>
        <span className="text-sm">EN</span>
      </Button>
      <Button
        variant={language === 'de' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('de')}
        className="flex items-center gap-2 px-3 py-1"
      >
        <span className="text-lg">🇩🇪</span>
        <span className="text-sm">DE</span>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
