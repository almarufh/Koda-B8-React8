import React from 'react';
import { useNavigate } from 'react-router';

export function useLocalStorage(key, Value) {
  const [value, setValue] = React.useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : Value;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function Register() {
  const [users, setUsers] = useLocalStorage('registeredUsers', []);
  const [formData, setFormData] = React.useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    const userExists = users.find((u) => u.email === formData.email);
    if (userExists) {
      alert('Email sudah terdaftar!');
      return;
    }

    setUsers((prev) => [...prev, formData]);
    alert('Registrasi berhasil!');
    navigate('/');
  };


  function Login () {
    const navigate = useNavigate();
    return (
      <span 
          className="m-4 font-bold text-xl cursor-pointer"
          onClick={() => navigate('/')}
      >
          Login Here
      </span>
    )
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Register</h1>

        <label htmlFor="name">Nama</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Register
        </button>
      </form>
      <Login />
    </div>
  );
}

export default Register;