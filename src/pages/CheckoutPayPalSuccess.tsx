import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const CheckoutPayPalSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (!token) {
      setError("Fehlende Order-ID.");
      setLoading(false);
      return;
    }
    fetch(`http://localhost:4000/api/plugins/verify-paypal-order?token=${token}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.pluginId) {
          localStorage.setItem(`purchased_${data.pluginId}`, "true");
          setSuccess(true);
        } else {
          setError(data.error || "Unbekannter Fehler.");
        }
      })
      .catch(() => setError("Verbindung zum Server fehlgeschlagen."))
      .finally(() => setLoading(false));
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <Header />
      <div className="container mx-auto px-4 py-16 text-center">
        {loading ? (
          <p className="text-xl">Wird überprüft...</p>
        ) : success ? (
          <>
            <h1 className="text-3xl font-bold mb-6 text-green-700">Zahlung erfolgreich!</h1>
            <p className="mb-8">Ihre Zahlung war erfolgreich. Sie können das Plugin jetzt herunterladen.</p>
            <button onClick={() => navigate("/")} className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90">Zurück zur Startseite</button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6 text-red-700">Fehler</h1>
            <p className="mb-8">{error}</p>
            <button onClick={() => navigate("/")} className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90">Zurück zur Startseite</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPayPalSuccess; 