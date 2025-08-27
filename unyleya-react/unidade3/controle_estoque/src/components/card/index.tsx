import './style.css';

interface CardProps {
  nome: string;
  url_imagem: string;
  fornecedor: string;
  preco: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <h3>{props.nome}</h3>
      <img src={props.url_imagem} alt="" />
      <p>{props.fornecedor}</p>
      <p>R$ {props.preco}</p>
    </div>
  );
};

export default Card;