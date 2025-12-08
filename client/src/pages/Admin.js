import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin(){
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [email, setEmail] = useState('admin@bungash.com');
  const [password, setPassword] = useState('123');
  const [colors, setColors] = useState([]);
  const [form, setForm] = useState({ name: '', hex: '', description: '' });

  useEffect(() => {
    fetchColors();
  }, []);

  async function fetchColors(){
    const res = await axios.get('/api/colors');
    setColors(res.data);
  }

  async function login(e){
    e.preventDefault();
    try{
      const res = await axios.post('/api/auth/login', { email, password });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      alert('Logged in');
    }catch(err){
      alert('Login failed');
    }
  }

  async function createColor(e){
    e.preventDefault();
    try{
      await axios.post('/api/colors', form, { headers: { Authorization: 'Bearer '+token } });
      setForm({ name: '', hex: '', description: '' });
      fetchColors();
    }catch(err){
      alert('Create failed');
    }
  }

  return (
    <div className="container admin-page">
      <h2>Admin Panel</h2>
      {!token && (
        <form onSubmit={login} className="admin-login">
          <input value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button>Login</button>
        </form>
      )}

      {token && (
        <div>
          <form onSubmit={createColor} className="color-form">
            <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} required />
            <input placeholder="#hex" value={form.hex} onChange={e=>setForm({...form, hex: e.target.value})} required />
            <input placeholder="Description" value={form.description} onChange={e=>setForm({...form, description: e.target.value})} />
            <button>Create Color</button>
          </form>

          <div className="colors-list">
            {colors.map(c => (
              <div key={c._id} className="color-item">
                <div className="swatch" style={{background: c.hex}} />
                <div>
                  <h4>{c.name}</h4>
                  <p>{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
