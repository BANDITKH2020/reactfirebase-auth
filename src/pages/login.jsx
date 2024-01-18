// LoginComponent.js
import React, { useState } from 'react';
import { auth } from '../libs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [errorMessage , setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard')
    } catch (error) {
        setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </div>
  );
};

export default LoginComponent;
