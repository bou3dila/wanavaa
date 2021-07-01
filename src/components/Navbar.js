import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";
import logo from "../wanavaa_logo.png";
import white_logo from "../wanavaa_white_logo.png";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [click]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (x) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else if (x == 1) {
      setDropdown1(true);
    } else if (x == 0) {
      setDropdown(true);
    } else if (x == 2) {
      setDropdown2(true);
    }
  };
  const onMouseLeave = () => {
    setDropdown(false);
    setDropdown1(false);
    setDropdown2(false);
  };

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <Link to="/" className="navbar-logo">
          <img
            src={window.scrollY > 0 ? logo : white_logo}
            className="App-logo"
            alt="logo"
          />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i
            style={{ color: window.scrollY > 0 ? "black" : "white" }}
            className={click ? "fas fa-times" : "fas fa-bars"}
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => onMouseEnter(0)}
          >
            <Link
              to="/aventures"
              className={navbar ? "nav-links active" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Aventures <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown x={0} />}
          </li>
          <li
            className="nav-item"
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => onMouseEnter(1)}
          >
            <Link
              to="/communautés"
              className={navbar ? "nav-links active" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Communautés <i className="fas fa-caret-down" />
            </Link>
            {dropdown1 && <Dropdown x={1}/>}
          </li>
          <li
            className="nav-item"
            onMouseLeave={onMouseLeave}
            onMouseEnter={() => onMouseEnter(2)}
          >
            <Link
              to="/Apropos"
              className={navbar ? "nav-links active" : "nav-links"}
              onClick={closeMobileMenu}
            >
              A propos <i className="fas fa-caret-down" />
            </Link>
            {dropdown2 && <Dropdown x={2}/>}
          </li>
          <li className="nav-item">
            <Link
              to="/ccm"
              className={navbar ? "nav-links active" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Comment ça marche?
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={navbar ? "nav-links active" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Nous contacter
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/partenaire"
              className={navbar ? "nav-links active" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Devenir partenaire
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
