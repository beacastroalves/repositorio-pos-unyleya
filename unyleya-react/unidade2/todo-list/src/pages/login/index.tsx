import { useState } from 'react';
import './style.css';

const Login = () => {

  const [name, setName] = useState("");

  return (
    <div className='container-login'>
      <div className='card-login'>
        <h1>Informe seu nome</h1>

        <input onChange={(evento) => setName(evento.target.value)} type="text" placeholder='Exemplo: Beatriz Castro' />

        <button>Entrar</button>
      </div>
    </div>
  );
};


export default Login;