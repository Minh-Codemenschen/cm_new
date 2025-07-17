import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "../ui/button";

interface PluginContentProps {
  content: {
    overview: {
      description: string;
      features: string[];
    };
    features: {
      key: string[];
      useCases: string[];
      pricing: {
        free: string;
        premium: string;
      };
    };
    documentation: {
      installation: string[];
    };
  };
}

const PluginContent = ({ content }: PluginContentProps) => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="documentation">Documentation</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="mt-6">
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            {content.overview.description}
          </p>
          
          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <ul className="list-disc pl-6 mb-6">
            {content.overview.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>

          <div className="aspect-video mb-8">
            <iframe 
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Product Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="features" className="mt-6">
        <div className="prose max-w-none">
          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <ul className="list-disc pl-6 mb-6">
            {content.features.key.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Use Cases</h3>
          <ul className="list-disc pl-6 mb-6">
            {content.features.useCases.map((useCase, index) => (
              <li key={index} className="mb-2">{useCase}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Pricing Options</h3>
          <p>Free Version: {content.features.pricing.free}</p>
          <p>Premium Version: {content.features.pricing.premium}</p>
        </div>
      </TabsContent>

      <TabsContent value="documentation" className="mt-6">
        <div className="prose max-w-none">
          <h3 className="text-2xl font-semibold mb-4">Installation Guide</h3>
          <ol className="list-decimal pl-6 mb-6">
            {content.documentation.installation.map((step, index) => (
              <li key={index} className="mb-3">{step}</li>
            ))}
          </ol>
          <Button variant="outline" className="mt-4">
            View Full Documentation
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default PluginContent;