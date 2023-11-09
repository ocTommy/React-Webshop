import { Link } from "react-router-dom";
import "../styles/Home.css";
import bannerImage from "../assets/background.jpg";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="headerContainer">
        <h1>Tommy's Christmas Shop</h1>
        <p>DECORATION FOR EVERYBODY</p>
        <Link to="/products">
          <button>SHOP ALL</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
