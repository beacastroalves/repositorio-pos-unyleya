import { useState } from 'react';
import image from '../../assets/images/loojiinhaRCT.png';
import './style.css';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface ResponseAuthLogin {
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
}

const Login = () => {

  const navigate = useNavigate();
  const { setFirstName, setLastName} = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await api.post<ResponseAuthLogin>("/auth/login", {
      username: username,
	    password: password,
	    expiresInMins: 60
    });
    setFirstName(response.data.firstName);
    setLastName(response.data.lastName);
    console.log(response)
    navigate('/products');
    console.log(response);
    } catch (error) {
      alert("Erro ao logar " + error);
    }
  };

  return (
    <div className='container-login'>
      <div className="login-header">
        <img src={image} alt="" />
      </div>
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