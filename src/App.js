import "./App.css";
import NavBarComponent from "./Components/Navbar/NavBarComponent";
import CartWidget from "./Components/Navbar/CartWidget";
import ItemCarousel from "./Components/ItemCarousel/ItemCarousel";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <CartWidget />
      <ItemCarousel />
    </div>
  );
}

export default App;
