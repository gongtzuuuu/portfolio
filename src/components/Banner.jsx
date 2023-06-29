import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Import components
import TextEffect from "./TextEffect";

function Banner() {
  return (
    <div className="banner" id="banner">
      <div className="banner-heroimage">
        <img src="https://images.unsplash.com/photo-1592279485490-29d5e35cba3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
      </div>

      <div className="banner-text">
        <TextEffect delay={0}>
          <h3>Web developer based in Taiwan</h3>
        </TextEffect>
        <TextEffect delay={0.3}>
          <p>
            Currently work as an indepedant.Highly motivated and committed to
            good working knowledge and the ability to learn new technology
            quickly, with a background in project management that possesses a
            high degree of problem-solving and teamwork skills.
          </p>
          <HashLink smooth className="dark-button" to="/#about">
            Explore more
          </HashLink>
        </TextEffect>
      </div>
      <TextEffect delay={0.6}>
        <div className="banner-header">
          <h5>TZU-YUN LIANG</h5>
          <div className="banner-header-text hide-mobile">
            <p>
              WEB DEVELOPER
              <br />
              PORTFOLIO 2022-2023
            </p>
          </div>
          <div className="banner-header-text hide-mobile">
            <p>
              ART CREATOR
              <br />
              PORTFOLIO 2019-2020
            </p>
          </div>
        </div>
      </TextEffect>

      <div className="banner-decoration">
        <TextEffect delay={0.9}>
          <div className="banner-decoration-link">
            <NavLink to="https://github.com/gongtzuuuu" target="_blank">
              <p>GITHUB</p>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/tyliang/" target="_blank">
              <p>LINKEDIN</p>
            </NavLink>
          </div>
        </TextEffect>
        <TextEffect delay={1}>
          <div className="banner-decoration-geo hide-mobile">
            <p>N23.7058,E120.4154</p>
          </div>
        </TextEffect>
        <TextEffect delay={1.1}>
          <div className="banner-decoration-copyright">
            <p>copyright ©TZU All Rights Reserved.</p>
          </div>
        </TextEffect>
      </div>
    </div>
  );
}

export default Banner;
