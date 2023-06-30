import { NavLink } from "react-router-dom";

function PortfolioNav() {
  return (
    <div className="portfolio-nav">
      <NavLink to="/">Back to HOME</NavLink>
      <NavLink
        style={{ marginLeft: "10px" }}
        to="https://drive.google.com/file/d/12oRetIKRQguKSOMrBFELBGkpL2yfuzJd/view?usp=drive_link"
        target="_blank"
      >
        Download my CV
      </NavLink>
    </div>
  );
}

export default PortfolioNav;
