
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

interface PluginHeaderProps {
  name: string;
  downloads: number;
  rating: number;
  description: string;
  image: string;
  onDownload: () => void;
}

const PluginHeader = ({ 
  name, 
  downloads, 
  rating, 
  description, 
  image,
  onDownload 
}: PluginHeaderProps) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handlePurchase = () => {
    navigate("/checkout", { 
      state: { 
        plugin: {
          name,
          downloads,
          rating,
          description,
          image
        }
      }
    });
  };

  return (
    <>
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> {t('plugin.backToPlugins')}
      </Button>
      
      <div className="bg-white/95 rounded-lg shadow-xl p-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="h-[400px] overflow-hidden rounded-lg">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-4">{name}</h1>
            <div className="flex items-center mb-4 text-gray-600">
              <span className="mr-4">{downloads.toLocaleString()} {t('plugin.downloads')}</span>
              <span>{rating} {t('plugin.rating')}</span>
            </div>
            <p className="text-gray-600 mb-8">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary"
                onClick={handlePurchase}
              >
                {t('plugin.purchaseNow')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a 
                  href="https://downloads.wordpress.org/plugin/gift-voucher.4.4.8.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('plugin.downloadFree')}
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="flex items-center gap-2"
                asChild
              >
                <a 
                  href={`https://wordpress.org/plugins/search/${name.toLowerCase().replace(/\s+/g, '-')}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.109m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.212 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
                  </svg>
                  {t('plugin.viewWordPress')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PluginHeader;
