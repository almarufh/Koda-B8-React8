import React from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { setAuth } = React.useContext(AuthContext); 
  const navigate = useNavigate();

  const users = [
    { email: "admin@mail.com", password: "admin123" },
    { email: "owner@mail.com", password: "pw123456" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const existUser = users.find((user) => 
        user.email === email && user.password === password
    );

    if (existUser) {
      setAuth({ 
            statusActived: true, 
            user: existUser 
        });
      navigate('/dashboard');
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="flex w-full h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;