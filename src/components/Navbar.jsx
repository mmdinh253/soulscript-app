import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="list-items">
        <li className="item active">
          <a className="link" href="#">
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li className="item">
          <a className="link" href="#">
            <i className="fas fa-search"></i>
          </a>
        </li>
        <li className="item">
          <a className="link" href="#">
            <i className="fas fa-heart"></i>
          </a>
        </li>
        <li className="item">
          <a className="link" href="#">
            <i className="fas fa-book"></i>
          </a>
        </li>
        <li className="item">
          <a className="link" href="#">
            <i className="fas fa-user"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;