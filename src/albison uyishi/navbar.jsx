import "./navbar.css"
import React from "react";

function Nav() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="http://localhost:3000/">
            <img src="https://www.albison.uz/img/svg/logotype.svg" alt="LOGO" />
          </a>
        </div>
        <ul>
            <li><a href="#asos">Asosiy</a></li>
            <li><a href="#ustun">Ustunliklar</a></li>
            <li><a href="#care">Career</a></li>
            <li><a id="cont" href="#con">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
