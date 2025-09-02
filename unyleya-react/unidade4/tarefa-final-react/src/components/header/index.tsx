import './style.css';
import logo from '../../assets/images/loojiinhaRCT.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container-header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="Logomarca da Loojiinha RCT" />
        </Link>
      </div>
      <div className="header-right">
        <span>Olá, <strong>Bia Castro</strong></span>
        <button>Sair</button>
      </div>
    </div>
  );
};

export default Header;