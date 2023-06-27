import React from "react";
import { ReactDOM } from "react";
import BackToTopButton from "../components/BackToTopButton";
import PortfolioBanner from "../components/PortfolioBanner";
import PortfolioNav from "../components/PortfolioNav";
import Project from "../components/Project";

function PortfolioPage() {
  return (
    <section id="portfoliopage">
      <BackToTopButton />
      <PortfolioNav />
      <PortfolioBanner />
      <Project />
    </section>
  );
}

export default PortfolioPage;
