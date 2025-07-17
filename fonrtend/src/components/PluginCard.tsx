import { Plugin } from "../types/plugin";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Download, Star, Euro } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect, useState } from "react";

interface PluginCardProps {
  plugin: Plugin;
}

export const PluginCard = ({ plugin }: PluginCardProps) => {
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);

  useEffect(() => {
    // Demo: kiểm tra trạng thái đã mua từ localStorage
    setIsPurchased(!!localStorage.getItem(`purchased_${plugin.id}`));
  }, [plugin.id]);

  const handleLearnMore = () => {
    window.scrollTo(0, 0);
    navigate(`/plugin/${plugin.id}`);
  };

  const handleBuy = () => {
    // Chuyển sang trang Checkout, truyền plugin qua state
    navigate("/checkout", { state: { plugin } });
  };

  const handleDownload = () => {
    // This is a temporary demo download
    const demoZipUrl = `/demo-plugin.zip`;
    
    try {
      const link = document.createElement('a');
      link.href = demoZipUrl;
      link.download = `${plugin.name.toLowerCase().replace(/\s+/g, '-')}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("Download started!", {
        description: "Your plugin will begin downloading shortly."
      });
    } catch (error) {
      toast.error("Download failed", {
        description: "Please try again later or contact support."
      });
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm">
      <div className="h-48 overflow-hidden">
        <img
          src={plugin.image}
          alt={plugin.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {plugin.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-2 mb-4">{plugin.description}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Download className="w-4 h-4 mr-1" />
            <span>{plugin.downloads.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-400" />
            <span>{plugin.rating}</span>
          </div>
        </div>
        {plugin.pricing && (
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <Euro className="w-4 h-4 mr-1" />
              <span>Single Website: €{plugin.pricing.single}</span>
            </div>
            <div className="flex items-center">
              <Euro className="w-4 h-4 mr-1" />
              <span>Unlimited Websites: €{plugin.pricing.unlimited}</span>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={handleLearnMore}
          className="flex-1 hover:bg-primary/5"
        >
          Mehr erfahren
        </Button>
        {!isPurchased ? (
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 transition-colors"
            onClick={handleBuy}
          >
            Kaufen
          </Button>
        ) : (
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 transition-colors"
            onClick={handleDownload}
          >
            <Download className="w-4 h-4 mr-2" /> Herunterladen
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};