import { Link } from "react-router-dom";
import Logo from "../assets/boxLogo.png";
import "../styles/Navbar.css";
import { Reorder } from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={Logo} alt="Christmas box" />
        </Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <Reorder />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
