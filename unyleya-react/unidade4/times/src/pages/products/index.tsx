import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import type { ProductOverviewResponse } from '../../models/product.model';
import './style.css';

const Products = () => {

  const { id } = useParams();

  const { token } = useAuth();

  const [products, setProducts] = useState<ProductOverviewResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await api.get<ProductOverviewResponse[]>(`/products/${id}`, {
        headers: { 'Authorization': token }
      });
      setProducts(response.data);
    } catch (error) {
      if (token) {
        alert('Erro ao encontrar os produtos ' + error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className='container-products'>
      <Header />
      <div className="content-products">
        { isLoading && <h3>Carregando...</h3>}
        { products.length < 1 && !isLoading && <h1>Nenhum produto do time foi encontrado</h1> }
        {
          products.map((product) => (
            <Link to={`/details/${product._id}`} key={product._id} className='product-content'>
              <div className='product-item'>
                <p>{product.name}</p>
                <p>R$ {product.price}</p>
                <img src={product.urlImage} alt={`Imagem do produto ${product.name}`} />
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
};

export default Products;