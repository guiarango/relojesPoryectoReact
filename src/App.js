import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import NavBarComponent from "./Components/Navbar/NavBarComponent";
import ItemListContainer from "./Components/Product/ItemListContainer";
import Home from "./Components/Home/Home";
import ProductDetail from "./Components/Product/ProductDetail";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/detail/:id" element={<ProductDetail />}></Route>
        <Route path="*" element={<h1>Error 404</h1>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
