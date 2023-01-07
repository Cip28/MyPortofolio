import React from "react";
import Button from './Button';
import background from "../images/common-bg.svg";
import "./sass/Nav.scss";

const Header = () => {
  return (
    <header>
      <img src={background} alt="bg" />
      <section>
        <h1>HEY, MY NAME IS CIPRIAN BARBU</h1>
        <p>
          I'm a 3rd year student in Economical Cybernetics at the Academy of
          Economical Studies
        </p> 
        <a href="#projects">
          <Button name="Projects" classTag='header'></Button> 
        </a>
      </section>
      <div className="moving-mouse-holder">
        <div className="mouse">
          <div className="mouse-button">&nbsp;</div>
        </div>     
      </div>
    </header>
  );
};

export default Header;
