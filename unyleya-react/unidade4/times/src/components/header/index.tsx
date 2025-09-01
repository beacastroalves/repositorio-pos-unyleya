import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './style.css';

const Header = () => {
  const navigate = useNavigate();
  const { username, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/")
  }

  return (
    <div className='container-header'>
      <Link to="/times">
        <h1>Unytimes</h1>
      </Link>
      <div>
        <span>Olá, { username }</span>
        <button onClick={handleLogout}>Sair</button>
      </div>
    </div>
  );
};

export default Header;