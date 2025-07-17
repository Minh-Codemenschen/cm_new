
import { plugins } from "../data/plugins";
import { PluginCard } from "../components/PluginCard";
import Header from "../components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";

const Index = () => {
  const { t } = useLanguage();
  const highlightedPlugin = plugins[0];

  useEffect(() => {
    document.title = "WordPress Entwicklung Graz - Premium WordPress Plugins";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <Header />
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-24 animate-fade-in">
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('index.whoWeAre')}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('index.heroText')}
          </p>
        </div>

        {/* Highlighted Plugin Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('index.featuredPlugin')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
              {t('index.featuredDescription')}
            </p>
          </div>
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-none shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="h-[400px] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={highlightedPlugin.image}
                  alt={highlightedPlugin.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <CardHeader>
                  <CardTitle className="text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                    {highlightedPlugin.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-8 text-gray-600">{highlightedPlugin.description}</p>
                  <div className="flex gap-4">
                    <button 
                      className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                      onClick={() => window.location.href = `/plugin/${highlightedPlugin.id}`}
                    >
                      {t('index.learnMore')}
                    </button>
                    <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary/10 transition-colors">
                      {t('index.downloadNow')}
                    </button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Plugins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 rounded-2xl">
          {plugins.map((plugin, index) => (
            <div key={plugin.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <PluginCard plugin={plugin} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
