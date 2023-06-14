import { NavLink } from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton";
import Project from "../components/Project";

function PortfolioPage() {
  return (
    <>
      <section id="portfoliopage">
        <BackToTopButton />
        <NavLink className="dark-button" to="/">
          Back to HOME
        </NavLink>
        <h1 style={{ color: "white" }}>PortfolioPage</h1>
        <Project />
      </section>
    </>
  );
}

export default PortfolioPage;
