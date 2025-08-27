import axios from "axios";
import Card from "../../components/card";
import Header from "../../components/header";
import './style.css';
import { useEffect, useState } from "react";
import Modal from 'react-modal';

interface Produto {
  _id: string;
  nome: string;
  url_imagem: string;
  descricao: string;
  preco: string;
  fornecedor: string;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

Modal.setAppElement('#root');

const Home = () => {

  const [produtos, setProdutos] = useState<Produto[]>([]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [urlImagem, setUrlImagem] = useState("");

  const getProducts = async () => {
    const response = await axios.get(
      "https://api-produtos-unyleya.vercel.app/produtos"
    );

    setProdutos(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container-home">
      <Header />
      <h2>Produtos</h2>

      <div className="home-cards">
      {
        produtos.map((product) => {
          return (
            <Card
              key={product._id}
              nome={product.nome}
              url_imagem={product.url_imagem}
              preco={product.preco}
              fornecedor={product.fornecedor}
            />
          )
        })
      }
      </div>
      <button className="float-button" onClick={() => setIsOpenModal(true)}>+</button>

      <Modal
        style={customStyles}
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
      >
        <h3>Cadastrar Produto</h3>

        <form className="form-cadastro">
          <input type="text" placeholder="Nome do Produto" value={nome} onChange={(event) => setNome(event.target.value)} />

          <input type="text" placeholder="Preço" value={preco} onChange={(event) => setPreco(event.target.value)} />

          <select value={fornecedor} onChange={(event) => setFornecedor(event.target.value)} >
            <option value="" disabled>Fornecedor</option>
            <option value="Fornecedor 1">Fornecedor 1</option>
            <option value="Fornecedor 2">Fornecedor 2</option>
            <option value="Fornecedor 3">Fornecedor 3</option>
          </select>

          <input type="text" placeholder="URL da imagem" value={urlImagem} onChange={(event) => setUrlImagem(event.target.value)} />
          <textarea placeholder="Descrição" value={descricao} onChange={(event) => setDescricao(event.target.value)} />
          <div className="buttons">
            <button>Salvar</button>
            <button onClick={() => setIsOpenModal(false)}>Cancelar</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Home;