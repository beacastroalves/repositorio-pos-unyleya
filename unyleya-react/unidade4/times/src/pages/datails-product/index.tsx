import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import Header from '../../components/header';
import type { ProductOverviewResponse } from '../../models/product.model';
import './style.css';

const DetailsProduct = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductOverviewResponse>({} as ProductOverviewResponse);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
  try {
    const response = await api.get<ProductOverviewResponse>(`/product/${id}`, {
      headers: { 'Authorization': token }
    });
    setProduct(response.data);
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

  useEffect(() => {
    if(!token) {
      navigate('/');
    }
  }, []);

  return (
    <div className='container-details'>
      <Header />
      { !product && !isLoading && <h1>Nenhum produto do time selecionado foi encontrado</h1> }
      <div className="content-details">
        <img src={product.urlImage} alt={`imagem do produto ${product.name}`} />
        <div className="item-details">
          <h3>{product.name}</h3>
          <small>{product.categoryId}</small>
          <p>R$ {product.price}</p>
          <p>Descrição</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;