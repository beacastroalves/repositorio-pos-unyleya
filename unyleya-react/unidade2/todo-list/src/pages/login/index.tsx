import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <div className='container-login'>
      <div className='card-login'>
        <h1>Informe seu nome</h1>

        <input value={name} onChange={(evento) => setName(evento.target.value)} type="text" placeholder='Exemplo: Beatriz Castro' />

        <button onClick={handleNavigate}>Entrar</button>
      </div>
    </div>
  );
};


export default Login;