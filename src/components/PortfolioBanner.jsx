// Import from framer motion
import { useState } from "react";
import { motion } from "framer-motion";

function PortfolioBanner() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="portfolio-banner">
      <h3>Portfolio</h3>
      <div className="portfolio-banner-img">
        <img src="https://images.unsplash.com/photo-1512988081803-9edc352397b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
      </div>
    </div>
  );
}

export default PortfolioBanner;
