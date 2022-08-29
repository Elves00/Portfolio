import React, {useState} from "react";
import "./header.css";

const Header = () => {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <div className="header">
        <div id="home">
          <ul className="nav">
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#skill">
              <li>Skills</li>
            </a>
            <a href="#project">
              <li>Project</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
