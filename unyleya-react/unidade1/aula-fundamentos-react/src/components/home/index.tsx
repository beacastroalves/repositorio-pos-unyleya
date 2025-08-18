import "./styles.css";
import hamburguer from "../../assets/images/hamburguer.png"
import bebidas from "../../assets/images/bebidas.png"

const Home = () => {
  return (
    <div className="container-home">
      <h2>Nosso objetivo é servir você!</h2>

      <div className="container-input">
        <input type="text" placeholder="Encontre um restaurante perto de você"/>
        <button className="btn-primary-home">Encontrar</button>
      </div>

      <div className="container-cards">
        <div className="card">
          <h2>Comidas</h2>

          <button>Ver opções</button>
          <img src={hamburguer} />
        </div>

        <div className="card">
          <h2>Bebidas</h2>

            <button>Ver opções</button>
            <img src={bebidas} />
        </div>
      </div>
    </div>
  )
}


export default Home;