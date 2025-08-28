import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <div className='container-header'>
      <h1>UnyProducts</h1>
      <ul>
        <li><Link to={`/`} className='link-header'>Produtos</Link></li>
        <li><Link to={`/quem-somos`} className='link-header'>Quem somos</Link></li>
      </ul>
    </div>
  );
};

export default Header;