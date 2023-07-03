import { NavLink } from "react-router-dom";

// Import components
import TextEffect from "./TextEffect";

// Import picture resource
import profileImage from "../assets/profile-pic.jpg";
import backgroundImg from "../assets/photos/hf2lPpUU.jpg";

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
                I am a web developer based in Taipei, Taiwan, specializing in
                crafting reliable and expandable web-based products that
                prioritize user experiences. With expertise in web development,
                I have successfully delivered a wide range of projects.
              </h5>
            </TextEffect>
          </div>
        </div>
        <div className="about-bio">
          <div className="about-bio-text">
            <TextEffect delay={0.6}>
              <p className="job-title">
                WEB DEVELOPER<br></br>2022-present
              </p>
            </TextEffect>
            <TextEffect delay={0.9}>
              <p className="job-description">
                Excel at delivering accessible, fluid, and interactive websites,
                having successfully collaborated with fellow developers on
                projects.
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
                Developed key project goals and worked collaboratively with
                teams to achieve them in a timely and effective manner.
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
                Explored diverse mediums such as photography, performance, and
                literature, placing interdisciplinary professionalism.
              </p>
            </TextEffect>
          </div>
        </div>

        <TextEffect delay={1.1}>
          <div className="about-button">
            <NavLink className="light-button about-button-link" to="/portfolio">
              See my portfolio
            </NavLink>
            <NavLink
              className="light-button about-button-link"
              to="https://drive.google.com/file/d/12oRetIKRQguKSOMrBFELBGkpL2yfuzJd/view?usp=drive_link"
              target="_blank"
            >
              Download my CV
            </NavLink>
          </div>
        </TextEffect>
      </div>

      <div className="about-backgroundimage">
        <img src={backgroundImg}></img>
      </div>
    </div>
  );
}

export default About;
