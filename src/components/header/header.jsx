import React from "react";
import css from "./header.module.css";
import logo from "../assets/logo.gif";
import HeaderInfo from "./headerInfo";

const Header = ({ toggleMapView }) => {
  return (
    <header>

      <div className={css.logo}>
      <img src={logo} alt="Computer Center Photos" />
      </div>
    <div className={css.headerInfo}>
      <HeaderInfo toggleMapView={toggleMapView} />
      </div>
    </header>
  );
};

export default Header;
