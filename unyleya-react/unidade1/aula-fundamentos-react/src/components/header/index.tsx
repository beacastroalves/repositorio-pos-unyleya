import './styles.css';

const Header = () => {
  return (
    <header className='container-header'>
      <h1>Unyfood</h1>

      <ul>
        <li>Categorias</li>
        <li>Restaurantes</li>
        <li>Informações</li>
        <li>Cadastre-se</li>
        <li>
          <button className='btn-primary-header'>Entrar</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;