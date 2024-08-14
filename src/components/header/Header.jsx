import React from "react";
import Logo from "../../images/logo.png";
import Profile from "../../images/profile.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper-header">
          <img src={Logo} alt="" />
          <input
            className="header-input"
            type="text"
            placeholder="Search something here"
          />

          <div className="wrapper-icons">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-gear"></i>
            <img src={Profile} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
