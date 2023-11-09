import { Link } from "react-router-dom";
import Logo from "../assets/boxLogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Christmas box"></img>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
