import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import Banner from "../components/Banner";
import About from "../components/About";
import BackToTopButton from "../components/BackToTopButton";

function HomePage() {
  return (
    <div className="homepage">
      <BackToTopButton />
      <Banner />
      <About />
      <div className="medium-link">
        <NavLink
          className="medium-img"
          to="https://medium.com/@gongtzuuuu"
          target="_blank"
        >
          <img src="https://images.unsplash.com/photo-1487900562037-056962ab1fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"></img>
          <h3 className="medium-text">Medium Column</h3>
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
