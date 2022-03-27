import React from "react";
import { Navbar } from "../navbar/navbar.component";

import "./header.component.style.css";

export const Header = () => {
  return (
    <section className="header__hero">
      <div className="col">
        <img src="./logo.svg" />
      </div>
      <div className="col-6">
        <Navbar />
      </div>
    </section>
  );
};
