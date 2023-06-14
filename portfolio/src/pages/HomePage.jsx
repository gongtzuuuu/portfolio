//import { Button } from "react-bootstrap";
//import { Link, NavLink } from "react-router-dom";
import "../App.css";
import BackToTopButton from "../components/BackToTopButton";
import Banner from "../components/Banner";
import About from "../components/About";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <section id="homepage">
      <BackToTopButton />
      <Banner />
      <About />
      <div className="marquee">
        <span>
          Interested in working together? Feel free to contact me at anytime!
          Interested in working together? Feel free to contact me at anytime!
          Interested in working together? Feel free to contact me at anytime!
        </span>
      </div>
      <Footer />
    </section>
  );
}

export default HomePage;
