import { Link } from "react-router-dom";
import { useState } from "react";
import "../Components/NavBar.css";
import logo from "../assets/logo.png";

const Lists = [
  {
    nav: "Home",
    to: "/",
  },
  {
    nav: "About",
    to: "/about",
  },
  {
    nav: "Contact",
    to: "/contact",
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

  // Function to handle click event and set the active menu
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };
  return (
    <div className="navbar container">
      <img src={logo} alt="" />
      <div className="btns">
        {Lists.map((list, index) => {
          return (
            <Link
              key={index}
              to={list.to}
              onClick={() => handleMenuClick(list.nav)}
              className={activeMenu === list.nav ? "active" : "btn"}
            >
              {list.nav}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
