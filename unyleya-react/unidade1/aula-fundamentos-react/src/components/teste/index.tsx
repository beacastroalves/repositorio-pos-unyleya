import './styles.css';

interface TesteProps {
  name: string;
  cidade?: string;
}

const Teste = (props: TesteProps) => {
  return (
    <div className='container-teste'>
      <h5>{props.name}</h5>
      <h6>{props.cidade ? props.cidade : "A cidade não foi informada"}</h6>
    </div>
  )
};

export default Teste;