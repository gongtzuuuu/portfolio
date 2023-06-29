//import { Button } from "react-bootstrap";
//import { Link, NavLink } from "react-router-dom";
import "../App.css";
import BackToTopButton from "../components/BackToTopButton";
import Banner from "../components/Banner";
import About from "../components/About";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

function HomePage(props) {
  return (
    <section id="homepage">
      <BackToTopButton />
      <Banner />
      <About />
      <Marquee />
      <Footer />
    </section>
  );
}

export default HomePage;
