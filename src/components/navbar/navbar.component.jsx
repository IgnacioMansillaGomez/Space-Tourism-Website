import React from "react";
import "./navbar.component.style.css";

export const Navbar = () => {
  return (
    <ul className="navbar__hero">
      <li>
        <span>00</span>
        <a href="#">HOME</a>
      </li>
      <li>
        <span>01</span>

        <a href="#">DESTINATION</a>
      </li>
      <li>
        <span>02</span>
        <a href="#">CREW</a>
      </li>
      <li>
        <span>03</span>
        <a href="#">TECHNOLOGY</a>
      </li>
    </ul>
  );
};
