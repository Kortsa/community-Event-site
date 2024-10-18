import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import "../Components/NavBar.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/icons8-hamburger-button-50.png";

const Lists = [
  {
    nav: "Home",
    to: "#",
  },
  {
    nav: "About",
    to: "#about",
  },
  {
    nav: "Contact",
    to: "#contact",
  },
  {
    nav: "Login",
    to: "/login",
  },
  {
    nav: "Sign Up",
    to: "/sign up",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container">
      <div className={`navbar ${showMenu ? "show" : ""}`} onClick={toggleMenu}>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>

        <div className="hamburger-menu">
          <img src={hamburger} alt="Menu" />
        </div>

        <div className="btns list">
          {Lists.map((list, index) => {
            return (
              <a key={index} className="btn link" href={list.to}>
                {list.nav}
              </a>
            );
          })}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;