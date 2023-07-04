// Import photo
import bannerImg from "../assets/photos/Zigjxc8E.jpg";

function PortfolioBanner() {
  return (
    <div className="portfolio-banner">
      <h3>Portfolio</h3>
      <div className="portfolio-banner-img">
        <img src={bannerImg}></img>
      </div>
    </div>
  );
}

export default PortfolioBanner;
