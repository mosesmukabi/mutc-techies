import "./header.css";
import { Link } from "react-router-dom";

function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <h1 className="logo">mutc-techies</h1>
      <nav>
        <ol className="navigation-list">
          <li className="navigation-item">
            <Link className="navigation-link" to="/">
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/Leadership">
              Leadership
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/Tracks">
              Tracks
            </Link>
          </li>
          <li className="navigation-item">
            <Link className="navigation-link" to="/Eventss">
              Events
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
function Header() {
  return (
    <header>
      <HeaderNavigation />
    </header>
  );
}

export default Header;
