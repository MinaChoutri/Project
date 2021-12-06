import { useState } from "react";
import { Button } from "./Button";
import Dropdown from "./Dropdown";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const extendElement = () => {
    dropdown ? setDropdown(false) : setDropdown(true);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          EPIC
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-time" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Acceuil
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/a-propos"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              A propos
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={extendElement}
          >
            <Link to="/services" className="nav-links">
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu} />}
          </li>
          <li className="nav-item">
            <Link
              to="/nous-contacter"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Nous contacter
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/inscription"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              S'inscrire
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
