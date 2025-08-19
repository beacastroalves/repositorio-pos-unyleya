import Header from "./components/header";
import Home from "./components/home";
import Restaurants from "./components/restaurants";
import Teste from "./components/teste";
import "./styles.css"

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Restaurants />
      <Teste name="Texto 1"/>
      <Teste name="Texto 2"/>
      <Teste name="Texto 3"/>
      <Teste name="Texto 4"/>
      <Teste name="Texto 5"/>
    </div>
  )
}

export default App;