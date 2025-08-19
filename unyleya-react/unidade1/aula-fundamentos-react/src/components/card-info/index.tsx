import './styles.css'

interface CardInfoProps {
  title: string;
  description: string;
  image: string;
}

const CardInfo = (props: CardInfoProps) => {
  return (
    <div className='info-card'>
      <img src={props.image}/>
      <div className='infos'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button className='btn-primary-info'>Saiba mais</button>
      </div>
    </div>
  );
};

export default CardInfo;