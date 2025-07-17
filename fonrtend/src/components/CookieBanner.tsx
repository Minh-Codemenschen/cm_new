import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6 z-50 animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center md:text-left">
          We use cookies to enhance your browsing experience and analyze our traffic. 
          By clicking "Accept", you consent to our use of cookies.
        </p>
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">More Information</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Cookie Policy</DialogTitle>
                <DialogDescription>
                  <div className="space-y-4 pt-4">
                    <h3 className="font-semibold">What are cookies?</h3>
                    <p>
                      Cookies are small text files that are stored on your device when you visit our website. 
                      They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                    </p>
                    
                    <h3 className="font-semibold">Types of cookies we use:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Essential cookies: Required for the website to function properly</li>
                      <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                      <li>Preference cookies: Remember your settings and choices</li>
                    </ul>
                    
                    <h3 className="font-semibold">Your rights</h3>
                    <p>
                      You can control and/or delete cookies as you wish. You can delete all cookies that are already 
                      on your device and you can set most browsers to prevent them from being placed.
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Button onClick={acceptCookies}>Accept</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;