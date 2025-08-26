import Card from "../../components/card";
import Header from "../../components/header";
import './style.css';

const products = [
  {
    id: "12",
    name: "Echo Dot (8ª Geração)",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meliuz.com.br%2Fblog%2Fwp-content%2Fuploads%2F2023%2F05%2F7-1.jpg&f=1&nofb=1&ipt=becd165f22745b5a9c7e3592cf0ed062f36515e848bae193de11a9627d090793",
    price: 799,
    brand: "Amazon",
  },
  {
    id: "13",
    name: "Echo Dot (8ª Geração)",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meliuz.com.br%2Fblog%2Fwp-content%2Fuploads%2F2023%2F05%2F7-1.jpg&f=1&nofb=1&ipt=becd165f22745b5a9c7e3592cf0ed062f36515e848bae193de11a9627d090793",
    price: 799,
    brand: "Amazon",
  },
  {
    id: "14",
    name: "Echo Dot (8ª Geração)",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meliuz.com.br%2Fblog%2Fwp-content%2Fuploads%2F2023%2F05%2F7-1.jpg&f=1&nofb=1&ipt=becd165f22745b5a9c7e3592cf0ed062f36515e848bae193de11a9627d090793",
    price: 799,
    brand: "Amazon",
  },
  {
    id: "15",
    name: "Echo Dot (8ª Geração)",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meliuz.com.br%2Fblog%2Fwp-content%2Fuploads%2F2023%2F05%2F7-1.jpg&f=1&nofb=1&ipt=becd165f22745b5a9c7e3592cf0ed062f36515e848bae193de11a9627d090793",
    price: 799,
    brand: "Amazon",
  },
  {
    id: "16",
    name: "Echo Dot (8ª Geração)",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meliuz.com.br%2Fblog%2Fwp-content%2Fuploads%2F2023%2F05%2F7-1.jpg&f=1&nofb=1&ipt=becd165f22745b5a9c7e3592cf0ed062f36515e848bae193de11a9627d090793",
    price: 799,
    brand: "Amazon",
  },
  {
    id: "17",
    name: "Echo Dot (8ª Geração)",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meliuz.com.br%2Fblog%2Fwp-content%2Fuploads%2F2023%2F05%2F7-1.jpg&f=1&nofb=1&ipt=becd165f22745b5a9c7e3592cf0ed062f36515e848bae193de11a9627d090793",
    price: 799,
    brand: "Amazon",
  },
]

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <h2>Produtos</h2>

      <div className="home-cards">
      {
        products.map((product) => {
          return (
            <Card
              key={product.id}
              name={product.name}
              img={product.img}
              price={product.price}
              brand={product.brand}
            />
          )
        })
      }
      </div>
      <button className="float-button">+</button>
    </div>
  );
};

export default Home;