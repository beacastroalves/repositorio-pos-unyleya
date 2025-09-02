// import { useState } from "react";
import CardProduct from "../../components/card-product";
import Header from "../../components/header";
import './style.css';

const ProductList = () => {
  // const [] = useState();

  return (
    <div className="container-product-list">
      <Header />
      <div className="content-list">
        <CardProduct />
      </div>
    </div>
  );
};

export default ProductList;