import './style.css';

interface CardProps {
  name: string;
  img: string;
  brand: string;
  price: number;
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <img src={props.img} alt="" />
      <p>{props.brand}</p>
      <p>R$ {props.price}</p>
    </div>
  );
};

export default Card;