import BackToTopButton from "../components/BackToTopButton";
import PortfolioBanner from "../components/PortfolioBanner";
import PortfolioNav from "../components/PortfolioNav";
import Project from "../components/Project";

// import data
import projects from "../data/data.json";

function PortfolioPage() {
  return (
    <>
      <section id="portfoliopage">
        <BackToTopButton />
        {/* <PortfolioNav /> */}
        <PortfolioBanner />
        <Project projects={projects} />;
      </section>
    </>
  );
}

export default PortfolioPage;
