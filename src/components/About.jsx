import { NavLink } from "react-router-dom";

// Import components
import TextEffect from "./TextEffect";

// Import picture resource
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
            <TextEffect delay={0}>
              <p>ABOUT</p>
            </TextEffect>
            <TextEffect delay={0.3}>
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
            <TextEffect delay={0.6}>
              <p className="job-title">
                WEB DEVELOPER<br></br>2022-2023
              </p>
            </TextEffect>
            <TextEffect delay={0.9}>
              <p className="job-description">
                Experienced Full Stack Engineer adept in JavaScript, React,
                Node.js. Proficient in front-end and back-end development,
                delivering robust web applications.
              </p>
            </TextEffect>
          </div>
          <div className="about-bio-text">
            <TextEffect delay={0.6}>
              <p className="job-title">
                PROJECT MANAGER<br></br>2021-2023
              </p>
            </TextEffect>
            <TextEffect delay={0.9}>
              <p className="job-description">
                Led diverse projects, analyzed, strategized for business goals,
                coordinated teams, and communicated progress to upper management
                effectively.
              </p>
            </TextEffect>
          </div>
          <div className="about-bio-text">
            <TextEffect delay={0.6}>
              <p className="job-title">
                ART CREATOR<br></br>2019-2020
              </p>
            </TextEffect>
            <TextEffect delay={0.9}>
              <p className="job-description">
                Collaborated with artists, curators, and art spaces worldwide.
                Her experience spans arts, publishing, and marketing,
                emphasizing communication and interdisciplinary professionalism.
              </p>
            </TextEffect>
          </div>
        </div>
        <div className="about-button">
          <TextEffect delay={1.2}>
            <NavLink className="light-button" to="/portfolio" smooth>
              See my portfolio
            </NavLink>
            <NavLink className="light-button" to="/portfolio" smooth>
              Download my CV
            </NavLink>
          </TextEffect>
        </div>
      </div>

      <div className="about-backgroundimage">
        <img src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"></img>
      </div>
    </div>
  );
}

export default About;
