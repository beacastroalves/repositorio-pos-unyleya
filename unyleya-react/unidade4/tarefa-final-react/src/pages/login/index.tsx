import { useState } from 'react';
import Header from '../../components/header';
import './style.css';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await api.post("/auth/login", {
      username: username,
	    password: password,
	    expiresInMins: 60
    });
    navigate('/products')
    console.log(response);
    } catch (error) {
      alert("Erro ao logar " + error);
    }
  };

  return (
    <div className='container-login'>
      <Header />
      <div className='content-login'>
        <form onSubmit={logar}>
          <input type='text' placeholder='Informe seu username' value={username} onChange={(event) => setUsername(event.target.value)} />
          <input type='password' placeholder='Informe sua senha' value={password} onChange={(event) => setPassword(event.target.value)} />
          <button type='submit'>Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;