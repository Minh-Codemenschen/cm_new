
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/a6bee97c-fcfd-48d3-9f40-219249affcb0.png" 
              alt="CodeMenschen Logo" 
              className="h-8 md:h-12 w-auto" 
            />
          </Link>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-secondary hover:text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className="px-4 py-2 text-secondary hover:text-primary transition-colors">
                      {t('header.whatWeDo')}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/plugins">
                    <NavigationMenuLink className="px-4 py-2 text-secondary hover:text-primary transition-colors">
                      {t('header.plugins')}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/kontakt">
                    <NavigationMenuLink className="px-4 py-2 text-secondary hover:text-primary transition-colors">
                      {t('header.contact')}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/impressum">
                    <NavigationMenuLink className="px-4 py-2 text-secondary hover:text-primary transition-colors">
                      {t('header.imprint')}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/anmelden">
                    <NavigationMenuLink className="px-4 py-2 text-secondary hover:text-primary transition-colors">
                      {t('header.login')}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              <div className="mb-4">
                <LanguageSwitcher />
              </div>
              <Link 
                to="/plugins" 
                className="text-secondary hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.plugins')}
              </Link>
              <Link 
                to="/" 
                className="text-secondary hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.whatWeDo')}
              </Link>
              <Link 
                to="/kontakt" 
                className="text-secondary hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.contact')}
              </Link>
              <Link 
                to="/impressum" 
                className="text-secondary hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.imprint')}
              </Link>
              <Link 
                to="/anmelden" 
                className="text-secondary hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.login')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
