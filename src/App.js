import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
