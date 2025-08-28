import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Produto } from "../home";
import Header from "../../components/header";
import Modal from 'react-modal';
import './style.css';

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

const Details = () => {
  const params = useParams();

  const [product, setProduct] = useState<Produto>({} as Produto);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [urlImagem, setUrlImagem] = useState("");

  const limparFormulario = () => {
    setNome("");
    setPreco("");
    setDescricao("");
    setFornecedor("");
    setUrlImagem("");
  }

  const getDetailsProduct = async () => {
    try {
      const response = await axios.get(`https://api-produtos-unyleya.vercel.app/produtos/${params.id}`);

      setProduct(response.data);
    } catch (error) {
      alert("erro ao encontrar dados " + error);
    }
  };

  useEffect(() => {
    getDetailsProduct();
  }, []);

  const editProduct = async (event:React.FormEvent<HTMLFormElement>) => {
    console.log("teste de funcao");
    event.preventDefault();
    try {
      await axios.put(`https://api-produtos-unyleya.vercel.app/produtos/${params.id}`,
        {
          "nome": nome,
          "preco": preco,
          "fornecedor": fornecedor,
          "url_imagem": urlImagem,
          "descricao": descricao,
        }
      );
      alert("Produto editado com sucesso!");
      setIsOpenModal(false);
      getDetailsProduct();
      limparFormulario();
    } catch (error) {
      alert("Erro ao tentar editar o produto " + error);
    }
  }

  return (
    <div>
      <Header />
      <div className="container-details">
        <h1>{product.nome}</h1>
        <div className="details-buttons">
          <button onClick={() => {
            setIsOpenModal(true)
            setNome(product.nome);
            setDescricao(product.descricao);
            setFornecedor(product.fornecedor);
            setUrlImagem(product.url_imagem);
            setPreco(product.preco);
          }}>Editar</button>
          <button>Apagar</button>
        </div>
        <img src={product.url_imagem} />
        <p>{product.fornecedor}</p>
        <p>{product.preco}</p>
        <p>{product.descricao}</p>

        <Modal
          style={customStyles}
          isOpen={isOpenModal}
          onRequestClose={() => setIsOpenModal(false)}
        >
          <h3>Editar Produto</h3>

          <form className="form-cadastro" onSubmit={editProduct}>
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
              <button type="submit">Confirmar</button>
              <button onClick={() => setIsOpenModal(false)}>Cancelar</button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Details;