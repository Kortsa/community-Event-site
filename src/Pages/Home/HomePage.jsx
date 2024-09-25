import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Home/HomePage.css";
import About from "../About";
import Contact from "../Contact";
const HomePage = () => {
  return (
    <>
      <div className="home">
        <h2>
          Welcome to the Community <span>event website</span>{" "}
        </h2>
        <p>Discover local events and get involved in your community.</p>
        <Link to="/events" className="btn">
          View Events
        </Link>

        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default HomePage;
