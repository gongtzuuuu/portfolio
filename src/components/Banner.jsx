import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

//import components
import TextEffect from './TextEffect';
import backgroundImg from '../assets/photos/XCsWTMmliXg.jpg';

function Banner() {
  return (
    <div className="banner" id="banner">
      <div className="banner-heroimage">
        <img src={backgroundImg}></img>
      </div>

      <div className="banner-text">
        <TextEffect delay={0}>
          <h3>Hello.</h3>
        </TextEffect>
        <TextEffect delay={0.3}>
          <p>
            I believe web development is a means of self-expression. It should
            embody creativity and diversity, constantly pushing boundaries and
            embracing every possibility. That's why I am relentless in my
            pursuit of new techniques and ideas.
          </p>
          {/* <Link smooth className="dark-button" to="/portfolio">
            About me
          </Link> */}
        </TextEffect>
      </div>
      <TextEffect delay={0.6}>
        <div className="banner-header">
          <h5>TZU-YUN LIANG</h5>
          <div className="banner-header-text hide-mobile">
            <NavLink to="/portfolio">
              <p>
                WEB DEVELOPER
                <br />
                PORTFOLIO 2023
              </p>
            </NavLink>
          </div>
          <div className="banner-header-text hide-mobile">
            <p className="disable-link">
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
            <NavLink to="https://medium.com/@tyliang" target="_blank">
              <p>MEDIUM</p>
            </NavLink>
          </div>
        </TextEffect>
        <TextEffect delay={1.1}>
          <div className="banner-decoration-copyright">
            <p>©2023 TZU-YUN LIANG</p>
          </div>
        </TextEffect>
      </div>
    </div>
  );
}

export default Banner;
