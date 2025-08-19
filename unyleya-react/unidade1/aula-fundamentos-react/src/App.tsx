import Header from "./components/header";
import Home from "./components/home";
import Info from "./components/info";
import Restaurants from "./components/restaurants";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <div className="line"></div>
      <Restaurants />
      <div className="line"></div>
      <Info />
    </div>
  );
};

export default App;