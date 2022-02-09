import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import "./sass/Nav.scss";
import profil from "../images/profil (2).jpg";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const handleToggle = () => {
    setOpen(!open)
  }

  const toggleHome = () => {
    scroll.scrollToTop();
}
  return (
    <nav>
      <section>
        <div className="left">
          <img src={profil} alt="profil" onClick={toggleHome }/>
          <h3>Ciprian <span>Barbu</span></h3>
        </div>
        <Hamburger label="Show menu" onToggle={handleToggle} />
      </section>
      <ul className={open ? "" : "open"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
