import { useState } from 'react';
import './style.css';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import type { AuthResponse } from '../../models/auth.model';

const Login = () => {

  const navigate = useNavigate();
  const {setUsername ,setUserEmail, setToken} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await api.post<AuthResponse>('/auth', {
        email: email,
        password: password,
      });

      setUsername(response.data.name);
      setUserEmail(response.data.email);
      setToken(response.data.token);

      navigate('/times');
    } catch (error) {
      alert('Usuario nao encontrado ' + error)
    }
  };

  return (
    <div className='container-login'>
      <form onSubmit={logar}>
        <input type='text' placeholder='Informe seu email' value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type='password' placeholder='Informe sua senha' value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
};

export default Login;