import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
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
      const res = await fetch('https://cm-new-sandy.vercel.app/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const err = await res.json();
        setError(err.error || 'Registrierung fehlgeschlagen');
        setLoading(false);
        return;
      }
      // Registrierung erfolgreich, automatisch anmelden
      const loginRes = await fetch('https://cm-new-sandy.vercel.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const loginData = await loginRes.json();
      localStorage.setItem('token', loginData.token);
      localStorage.setItem('user', JSON.stringify(loginData.user));
      navigate('/dashboard');
    } catch (err) {
      setError('Serververbindungsfehler');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Registrieren</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <Input name="name" value={form.name} onChange={handleChange} placeholder="Name eingeben" required />
        </div>
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
          {loading ? 'Registrierung läuft...' : 'Registrieren'}
        </Button>
      </form>
      <div className="text-center mt-4">
        Bereits ein Konto? <a href="/login" className="text-primary underline">Anmelden</a>
      </div>
    </div>
  );
};

export default Register; 