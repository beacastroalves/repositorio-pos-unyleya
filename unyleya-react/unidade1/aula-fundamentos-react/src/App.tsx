import Header from "./components/header";
import Home from "./components/home";
import Restaurants from "./components/restaurants";
import Info from "./components/info";
import Footer from "./components/footer";
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
      <Footer />
    </div>
  );
};

export default App;