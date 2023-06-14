import { NavLink } from "react-router-dom";
import profileImage from "../assets/profile-pic.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-profile">
          <div className="about-profile-img">
            <img src={profileImage}></img>
          </div>
          <div className="about-profile-text">
            <p>ABOUT</p>
            <h5>
              I am passionate about everything that has to do with Digital
              Design and Art Direction. I enjoy working with agencies and
              enthusiastic people who want to solve problems through beautiful
              designs and experiences.
            </h5>
          </div>
        </div>
        <div className="about-bio">
          <div
            className="about-bio-text"
            style={{ borderRight: "1px solid #937829" }}
          >
            <p>
              WEB DEVELOPER<br></br>2022-2023
            </p>
            <p>
              I am passionate about everything that has to do with Digital
              Design and Art Direction.
            </p>
          </div>
          <div
            className="about-bio-text"
            style={{ borderRight: "1px solid #937829" }}
          >
            <p>
              PROJECT MANAGER<br></br>2018-2023
            </p>
            <p>
              I am passionate about everything that has to do with Digital
              Design and Art Direction.
            </p>
          </div>
          <div className="about-bio-text">
            <p>
              ART CREATOR<br></br>2019-2020
            </p>
            <p>
              I am passionate about everything that has to do with Digital
              Design and Art Direction.
            </p>
          </div>
        </div>
        <NavLink className="light-button" to="/portfolio" smooth>
          My portfolio
        </NavLink>
      </div>

      <div className="about-backgroundimage">
        <img src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"></img>
      </div>
    </div>
  );
}

export default About;
