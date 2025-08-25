import Header from "../../components/header";
import './style.css';

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <h2>Produtos</h2>

      <div className="card">
        <h3>Echo Dot (8ª Geração)</h3>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meliuz.com.br%2Fblog%2Fwp-content%2Fuploads%2F2023%2F05%2F7-1.jpg&f=1&nofb=1&ipt=becd165f22745b5a9c7e3592cf0ed062f36515e848bae193de11a9627d090793" alt="" />
        <p>Amazon</p>
        <p>R$ 700.99</p>
      </div>
    </div>
  );
};

export default Home;