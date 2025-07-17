import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('https://apt.codemenschen.at/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const err = await res.json();
        setError(err.error || 'Anmeldung fehlgeschlagen');
        setLoading(false);
        return;
      }
      const data = await res.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err) {
      setError('Serververbindungsfehler');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Anmeldung</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">E-Mail</label>
          <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="E-Mail eingeben" required />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Passwort</label>
          <Input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Passwort eingeben" required />
        </div>
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        <Button type="submit" className="w-full mt-4" disabled={loading}>
          {loading ? 'Anmeldung läuft...' : 'Anmelden'}
        </Button>
      </form>
      <div className="text-center mt-4">
        Noch kein Konto? <a href="/register" className="text-primary underline">Registrieren</a>
      </div>
    </div>
  );
};

export default Login; 