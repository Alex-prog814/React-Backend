import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';

const Login = () => {
  const navigate = useNavigate();

  const { handleLogin, error, setError } = useContext(authContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSave() {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    handleLogin(formData, email, navigate);
  };

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <div>
      <h1>Login User</h1>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => handleSave()}>Login</button>
    </div>
  )
}

export default Login