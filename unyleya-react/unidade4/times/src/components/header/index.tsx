import useAuth from '../../hooks/useAuth';
import './style.css';

const Header = () => {

  const { username } = useAuth();

  return (
    <div className='container-header'>
      <h1>Unytimes</h1>
      <div>
        <span>Olá, { username }</span>
        <button>Sair</button>
      </div>
    </div>
  );
};

export default Header;