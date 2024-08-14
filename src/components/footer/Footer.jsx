import React from "react";
import Logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper-footer">
          <ul className="wrapper-footer-ul">
            <li className="footer-logo">
              <img src={Logo} alt="" />
              <p className="our">
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </li>
            <li className="works">
              <span>
                <p className="about">About</p>
                <p className="our">How it works</p>
                <p className="our">Featured</p>
                <p className="our">Partnership</p>
                <p className="our">Bussiness Relation</p>
              </span>
              <span>
                <p className="about">Community</p>
                <p className="our">Events</p>
                <p className="our">Blog</p>
                <p className="our">Podcast</p>
                <p className="our">Invite a friend</p>
              </span>
              <span>
                <p className="about">Socials</p>
                <p className="our">Discord</p>
                <p className="our">Instagram</p>
                <p className="our">Twitter</p>
                <p className="our">Fecebook</p>
              </span>
            </li>
          </ul>
          <ul className="morent">
            <li className="all-rights">©2022 MORENT. All rights reserved</li>
            <li className="policy">
              <p className="all-rights">Privacy & Policy</p>
              <p className="all-rights">Terms & Condition</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
