import "./App.css";
import NavBarComponent from "./Components/Navbar/NavBarComponent";
import ItemCarousel from "./Components/ItemCarousel/ItemCarousel";
import ItemListContainer from "./Components/Product/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <ItemCarousel />
      <ItemListContainer greetings="Saludos CoderHouse" />
    </div>
  );
}

export default App;
