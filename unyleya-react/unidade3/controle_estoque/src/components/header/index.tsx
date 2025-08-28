import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <div className='container-header'>
      <h1>UnyProducts</h1>
      <ul>
        <li><Link to={`/`} className='link-header'>Products</Link></li>
        <li> Quem somos</li>
        <li>Sair</li>
      </ul>
    </div>
  );
};

export default Header;