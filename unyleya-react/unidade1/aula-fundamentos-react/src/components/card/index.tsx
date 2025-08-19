import './styles.css';

interface CardProps {
  name: string;
  category: string;
  color: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="card-restaurant">
      <div className='circle' style={{ backgroundColor: props.color }} />
      <div className="card-info">
        <p>{props.name}</p>
        <p>{props.category}</p>
      </div>
    </div>
  )
}

export default Card;