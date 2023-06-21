import React from "react";
import { ReactDOM } from "react";
import BackToTopButton from "../components/BackToTopButton";
import PortfolioBanner from "../components/PortfolioBanner";
import PortfolioNav from "../components/PortfolioNav";
import Project from "../components/Project";

// import data
import projectsData from "../data/data.json";

function PortfolioPage() {
  return (
    <>
      <section id="portfoliopage">
        <BackToTopButton />
        <PortfolioBanner />
        {projectsData.map((eachProject) => {
          <Project
            id={eachProject._id}
            title={eachProject.title}
            description={eachProject.description}
            picture={eachProject.picture}
          />;
        })}
      </section>
    </>
  );
}

export default PortfolioPage;
