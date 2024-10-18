import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Home/HomePage.css";
import About from "../About/About";
import Carousel from "../../Components/Carousel/Carousel";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <Carousel />
        <h2>
          Welcome to the Community <span>event website</span>
        </h2>
        <p>Discover local events and get involved in your community.</p>
        <Link to="/events" className="button">
          View Events
        </Link>
      </div>
      <div id="about">
        <About />
      </div>
    </>
  );
};

export default HomePage;
