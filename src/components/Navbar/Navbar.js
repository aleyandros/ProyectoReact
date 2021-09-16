import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Logo from "../../images/airplane.png";
import { TiHome } from "react-icons/ti";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={classes["NavbarItems"]}>
      <Link to="/">
        <img className={classes["logo"]} src={Logo} alt="Logo" />
      </Link>
      <ul className={classes["nav-menu"]}>
        <li>
          <Link to="/" className={classes["nav-links"]}>
            <TiHome />
          </Link>
        </li>
        <li>
          <Link to="/Shop" className={classes["nav-links"]}>
            Tienda
          </Link>
        </li>
        <li>
          <Link to="/ContactUs" className={classes["nav-links"]}>
            Contáctenos
          </Link>
        </li>
        <li>
          <Link to="/Profile" className={classes["nav-links"]}>
            <FaUser />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
