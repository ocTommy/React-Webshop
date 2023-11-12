import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductsDetails from "./components/ProductsDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
