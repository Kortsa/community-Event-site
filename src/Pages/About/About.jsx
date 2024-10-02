import "../About/About.css";
import Contact from "../Contact/Contact";
// import Contact from "../Contact/Contact";

const About = () => {
  return (
    <div className="about-contents">
      <h2>About Us</h2>
      <h1>
        Welcome to <span>EventFlex</span>
      </h1>
      <p>
        Your go-to platform for discovering and participating in local events.
      </p>

      <div className="cards">
        <div className="card">
          <div className="card-top">Our mission</div>
          <p>
            We envision a community where everyone feels informed, connected,
            and engaged by providing a one-step platform for community events,
            we aim to increase participation, promote local initiatives, and
            bring people closer.
          </p>
        </div>
        <div className="card white">
          <div className="card-top">Our Vision</div>
          <p>
            We envision a community where everyone feels informed, connected,
            and engaged by providing a one-step platform for community events,
            we aim to increase participation, promote local initiatives, and
            bring people closer.
          </p>
        </div>
        <div className="card white">
          <div className="card-top">What we offer</div>
          <p>
            We envision a community where everyone feels informed, connected,
            and engaged by providing a one-step platform for community events,
            we aim to increase participation, promote local initiatives, and
            bring people closer.
          </p>
        </div>
        <div className="card ">
          <div className="card-top">Join Us</div>
          <p>
            We envision a community where everyone feels informed, connected,
            and engaged by providing a one-step platform for community events,
            we aim to increase participation, promote local initiatives, and
            bring people closer.
          </p>
        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default About;
