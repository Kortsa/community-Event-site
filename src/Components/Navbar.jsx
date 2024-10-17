import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import "../Components/NavBar.css";
import logo from "../assets/logo.png";
import hamburger from "../assets/icons8-hamburger-button-50.png"

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
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Function to handle click event and set the active menu
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };
  return (
    <>
      <div className="navbar container">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>

      
        <img
          // src={hamburger}
          alt="Menu"
          className="hamburger"
          onClick={toggleMenu}
        />
        <div className={`btns ${isOpen ? "show" : ""}`}>
        
          {Lists.map((list, index) => {
            return (
              <a
                key={index}
                // onClick={() => handleMenuClick(list.nav)}
                className={activeMenu === list.nav ? "active" : "btn"}
                href={list.to}
                onClick={closeMenu} // Close menu on link click
              >
                {list.nav}
              </a>
            );
          })}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
