import { useState } from 'react';
import './style.css';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("logado");
  }

  return (
    <div className='container-login'>
      <form onSubmit={logar}>
        <input type="text" placeholder='Informe seu email' value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type="password" placeholder='Informe sua senha' value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
};

export default Login;