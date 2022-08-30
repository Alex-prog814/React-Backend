import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';
import Loader from '../../components/Loader/Loader';

const Register = () => {
  const { handleRegister, error, setError, loading } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleSave() {
    if(!email.trim() || !password.trim() || !passwordConfirm.trim()){
      alert('Some inputs are empty!');
    } else {
      let formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('password_confirm', passwordConfirm);
      handleRegister(formData, navigate);
    };
  };

  useEffect(() => {
    setError(false);
  }, []);

  if(loading) {
    return <Loader />;
  };

  return (
    <div>
      <h1>Register</h1>
      {error ? <h2>{error}</h2> : null}
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <input type="text" onChange={(e) => setPasswordConfirm(e.target.value)} />
      <button onClick={() => handleSave()}>Register</button>
    </div>
  )
}

export default Register