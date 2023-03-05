// import whiteLogo from "../images/coc-logo2.png";
import whiteLogo from "../images/glow_logo.jpg";
// import colorLogo from "../images/coc-logo1.jpg";
import colorLogo from "../images/glow_logo.jpg";
import "../index.css";
import { Link } from "react-router-dom";

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const authToken = false;

  return (
    <nav>
      <div className="logo-container">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <img className="logo" src={minimal ? colorLogo : whiteLogo} />
        </Link>
      </div>

      <ul className="nav-items">
        <li>
          <Link to="/onboarding" style={{ textDecoration: "none" }}>
            <p>Profile</p>
          </Link>
        </li>
        <li>
          <Link to="/events" style={{ textDecoration: "none" }}>
            <p>Events</p>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <p>Dashboard</p>
          </Link>
        </li>
      </ul>

      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Nav;
