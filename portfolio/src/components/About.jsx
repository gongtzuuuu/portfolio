import { NavLink } from "react-router-dom";
import profileImage from "../assets/profile-pic.jpg";
import TextEffect from "./TextEffect";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-profile">
          <div className="about-profile-img">
            <img src={profileImage}></img>
          </div>
          <div className="about-profile-text">
            <TextEffect>
              <p>ABOUT</p>
            </TextEffect>
            <TextEffect>
              <h5>
                Hello, I am TZU. I am a highly motivated web developer who is
                committed to good working knowledge and the ability to learn new
                technology quickly, with a background in project management that
                possesses a high degree of problem-solving and teamwork skills.
              </h5>
            </TextEffect>
          </div>
        </div>
        <div className="about-bio">
          <div className="about-bio-text">
            <p className="job-title">
              WEB DEVELOPER<br></br>2022-2023
            </p>
            <p className="job-description">
              I am passionate about everything that has to do with Digital
              Design and Art Direction.
            </p>
          </div>
          <div className="about-bio-text">
            <p className="job-title">
              PROJECT MANAGER<br></br>2018-2023
            </p>
            <p className="job-description">
              I am passionate about everything that has to do with Digital
              Design and Art Direction.
            </p>
          </div>
          <div className="about-bio-text">
            <p className="job-title">
              ART CREATOR<br></br>2019-2020
            </p>
            <p className="job-description">
              I am passionate about everything that has to do with Digital
              Design and Art Direction.
            </p>
          </div>
        </div>
        <div className="about-button">
          <NavLink className="light-button" to="/portfolio" smooth>
            See my portfolio
          </NavLink>
          <NavLink className="light-button" to="/portfolio" smooth>
            Download my CV
          </NavLink>
        </div>
      </div>

      <div className="about-backgroundimage">
        <img src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"></img>
      </div>
    </div>
  );
}

export default About;
