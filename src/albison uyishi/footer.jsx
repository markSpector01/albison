import "./footer.css";
import React from "react";

function Foo() {
  return (
    <footer id="con">
      <div className="umo">
        <div className="telnomer">
          <h1>Contact</h1>
          <p>Do you have any question?</p>
          <a href="tel:(88) 123 80 80">(88) 123 80 80</a>
          <a href="tel:(90) 112 27 57">(90) 112 27 57</a>
        </div>
        <div className="adress">
          <h1>Address</h1>
          <a
            target={"_blank"}
            href="https://yandex.uz/maps/org/27344936067/?from=tabbar&ll=69.264572%2C41.332336&mode=search&sll=69.264572%2C41.332336&source=serp_navig&text=Tashkent%20Labzak%20street%2070%20Amity%20University&z=16"
          >
            Tashkent
            <br />
            Labzak street 70
            <br />
            Amity University
          </a>
        </div>
        <div className="language">
          <h1>Language</h1>
          <span>
            <p>RU</p>
            <p>ENG</p>
            <p>UZB</p>
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Foo;
