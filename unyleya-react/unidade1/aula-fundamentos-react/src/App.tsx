import Header from "./components/header";
import Home from "./components/home";
import Restaurants from "./components/restaurants";
import "./styles.css"

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Restaurants />
    </div>
  )
}

export default App;