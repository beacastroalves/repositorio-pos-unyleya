import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import Header from "../../components/header";

interface DataProduct {
  description: string;
  name: string;
  price: number;
  urlImage: string;
  _id: string;
}

const DetailsProduct = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [product, setProduct] = useState<DataProduct>({} as DataProduct);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
  try {
    const response = await api.get<DataProduct>(`/product/${id}`, {
      headers: { "Authorization": token }
    });
    setProduct(response.data);
  } catch (error) {
    if (token) {
      alert("Erro ao encontrar os produtos " + error);
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
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      { !product && !isLoading && <h1>Nenhum produto do time selecionado foi encontrado</h1> }
      <h3>{product.name}</h3>
    </div>
  );
};

export default DetailsProduct;