import './style.css';
import { Link } from 'react-router-dom';

interface CardProps {
  id: string;
  nome: string;
  url_imagem: string;
  fornecedor: string;
  preco: string;
}

const Card = (props: CardProps) => {
  return (
    <Link to={`/details/${props.id}`} className='card-link'>
      <div className="card">
        <h3>{props.nome}</h3>
        <img src={props.url_imagem} alt="" />
        <p>{props.fornecedor}</p>
        <p>R$ {props.preco}</p>
      </div>
    </Link>
  );
};

export default Card;