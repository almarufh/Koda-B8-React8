import React from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';
import { useLocalStorage } from './Register';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { setAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [users] = useLocalStorage('registeredUsers', []);

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

  function Register() {
    const navigate = useNavigate();
    return (
      <span 
          className="m-4 font-bold text-xl cursor-pointer"
          onClick={() => navigate('/register')}
      >
          Create New Account
      </span>
    )
  }

  return (
    <div className="flex flex-col h-4 w-full h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="password">Password</label>
        <input
          name="password"
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
      <Register />
    </div>
  );
}

export default Login;