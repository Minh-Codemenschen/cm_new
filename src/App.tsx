
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useEffect } from "react";
import Index from "./pages/Index";
import PluginDetail from "./pages/PluginDetail";
import Contact from "./pages/Contact";
import Imprint from "./pages/Imprint";
import WhatWeDo from "./pages/WhatWeDo";
import Checkout from "./pages/Checkout";
import CookieBanner from "./components/CookieBanner";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import CheckoutPayPalSuccess from "./pages/CheckoutPayPalSuccess";

const queryClient = new QueryClient();

const TitleUpdater = () => {
  useEffect(() => {
    document.title = "WordPress Entwicklung Graz - Premium WordPress Plugins";
  }, []);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <TitleUpdater />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/plugin/:id" element={<PluginDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/checkout-paypal-success" element={<CheckoutPayPalSuccess />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <CookieBanner />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
