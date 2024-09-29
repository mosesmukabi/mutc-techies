import "./Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Murang'a university tech club</h1>
        <p>if it works don't touch it</p>
        <Link to="/Tracks" className="btn">
          Explore more
        </Link>
      </div>
    </div>
  );
}

export default Hero;
