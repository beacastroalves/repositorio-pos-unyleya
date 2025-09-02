import imagemProduct from '../../assets/images/loojiinhaRCT.png'
import './style.css';

const CardProduct = () => {
  return (
    <div className='container-card-product'>
      <h2>Nome do produto</h2>
      <img src={imagemProduct} alt={`Imagem do produto nome do produto`} />
      <p>R$ 000</p>
    </div>
  );
};

export default CardProduct;