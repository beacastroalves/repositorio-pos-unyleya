import type { Product } from '../../models/productList.model';
import './style.css';

interface Props {
  product: Product;
}

const CardProduct: React.FC<Props> = ({
  product,
}) => {
  return (
    <div className='container-card-product'>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={`Imagem do produto nome do produto`} />
      <p>$ {product.price}</p>
    </div>
  );
};

export default CardProduct;