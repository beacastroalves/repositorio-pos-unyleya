import './style.css';
import logo from '../../assets/images/loojiinhaRCT.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';


const Header = () => {

  const {firstName, lastName} = useAuth();
  return (
    <div className='container-header'>
      <div className='header-left'>
        <Link to='/products'>
          <img src={logo} alt='Logomarca da Loojiinha RCT' />
        </Link>
      </div>
      <div className='header-right'>
        <span>Olá, <strong>{`${firstName} ${lastName}`}</strong></span>
        <button>Sair</button>
      </div>
    </div>
  );
};

export default Header;