import './style.css';
import logo from '../../assets/images/loojiinhaRCT.png'
import { Link, useNavigate, } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';


const Header = () => {

  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate('/');
  }

  const login = () => {
    navigate('/login');
  }

  return (
    <div className='container-header'>
      <div className='header-left'>
        <Link to='/'>
          <img src={logo} alt='Logomarca da Loojiinha RCT' />
        </Link>
      </div>
      <div className='header-right'>
        {
          user && <>
            <span>Olá, <strong>{`${user.firstName} ${user.lastName}`}</strong></span>
            <button onClick={logout}>Sair</button>
          </>
        }
        {
          !user && !window.location.href.endsWith('/login') && <>
            <span>Olá, <strong>Visitante</strong></span>
            <button onClick={login}>Entrar</button>
          </>
        }
      </div>
    </div>
  );
};

export default Header;