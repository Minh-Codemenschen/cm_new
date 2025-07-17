
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Header from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  postalCode: z.string().min(4, "Postal code must be at least 4 characters"),
});

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const plugin = location.state?.plugin;
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "WordPress Entwicklung Graz - Kasse";
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      address: "",
      city: "",
      country: "",
      postalCode: "",
    },
  });

  if (!plugin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold mb-4">Kein Plugin ausgewählt.</h1>
          <Button onClick={() => navigate("/")}>Zurück zu den Plugins</Button>
        </div>
      </div>
    );
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Demo: Lưu trạng thái đã mua vào localStorage
      localStorage.setItem(`purchased_${plugin.id}`, "true");
      toast.success("Bestellung erfolgreich!", {
        description: "Ihre Bestellung wurde erfolgreich aufgegeben. Wir werden Sie in Kürze kontaktieren.",
      });
      navigate("/");
    } catch (error) {
      toast.error("Bestellung fehlgeschlagen", {
        description: "Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStripePay = async () => {
    try {
      const res = await fetch('https://cm-new-sandy.vercel.app/api/plugins/create-stripe-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pluginId: plugin.id, email: form.getValues('email') })
      });
      const data = await res.json();
      console.log('Stripe session response:', data);
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error('Stripe-Session konnte nicht erstellt werden.');
      }
    } catch (err) {
      toast.error('Stripe-Fehler: ' + err.message);
    }
  };

  const handlePayPalPay = async () => {
    try {
      const res = await fetch('https://cm-new-sandy.vercel.app/api/plugins/create-paypal-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pluginId: plugin.id })
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error('PayPal-Order konnte nicht erstellt werden.');
      }
    } catch (err) {
      toast.error('PayPal-Fehler: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Kasse</h1>
          
          <div className="bg-white/95 rounded-lg shadow-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Bestellübersicht</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{plugin.name}</p>
                <p className="text-sm text-gray-600">Premium-Version</p>
              </div>
              <p className="font-semibold">€{plugin.price || "49.99"}</p>
            </div>
          </div>

          <div className="bg-white/95 rounded-lg shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Rechnungsinformationen</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vorname</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nachname</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Firma</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stadt</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Land</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postleitzahl</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full hidden"
                  
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird verarbeitet..." : "Jetzt kaufen"}
                </Button>
                <Button type="button" onClick={handleStripePay} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Mit Kreditkarte (Stripe) bezahlen
                </Button>
                <Button type="button" onClick={handlePayPalPay} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                  Mit PayPal bezahlen
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
