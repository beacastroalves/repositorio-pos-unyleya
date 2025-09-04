import { useParams } from 'react-router-dom';
import image from '../../assets/images/loojiinhaRCT.png';
import './style.css';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import type { Product } from '../../models/productList.model';

const ProductDetails = () => {

  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async () => {
    try {
      const response = await api.get<Product>(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      alert('Erro ao buscar o produto / ' + error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div className='container-product-details'>
      <div className="shadow">
        { isLoading && <h2>Carregando...</h2> }
        {
          product && <>
            <div className='content-details'>
              <img src={product.images ? product.images[0] : image} alt='' />
              <div className='details-info'>
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
                <p>{product.description}</p>
                <p>{product.brand} | {product.category} | {product.stock}</p>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default ProductDetails;