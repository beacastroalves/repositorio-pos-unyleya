import { useEffect, useState } from 'react';
import CardProduct from '../../components/card-product';
import api from '../../services/api';
import './style.css';
import type { Product } from '../../models/productList.model';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const response = await api.get<{
        products: Product[];
      }>('/products');
      setProducts(response.data.products);
    } catch (error) {
      alert('Houve um erro ao buscar os produtos ' + error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='container-product-list'>
      <div className='content-list'>
        {
          products.map(product =>
            <Link to={`/product/${product.id}`} key={product.id}>
              <CardProduct
                product={product}
              />
            </Link>
          )
        }
      </div>
    </div>
  );
};

export default ProductList;