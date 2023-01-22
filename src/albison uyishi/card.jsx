import "./card.css";
import React from "react";

function Card() {
  return (
    <div id="bt2" className="cards">
      <div className="card">
        <h1>Frontend</h1>
        <p>HTML</p>
        <p>CSS+SCSS</p>
        <p>JavaScript</p>
        <p>React.js</p>
        <p>Next.js</p>
        <p>Git</p>
      </div>
      <div className="card">
        <h1>Backend</h1>
        <p>Node.js + Nest.js</p>
        <p>Java</p>
        <p>Python</p>
        <p>Go</p>
        <p>MongoDB</p>
        <p>iconsPostgreSQL</p>
      </div>
      <div className="card">
        <h1>Internship</h1>
        <p>Albison</p>
        <p>iTechArt</p>
        <p>EPAM</p>
        <p>Rounded</p>
        <p>SICNT</p>
        <p>Itransition</p>
      </div>
    </div>
  );
}

export default Card;
