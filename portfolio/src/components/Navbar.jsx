import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Nav.Link href="/">TZU</Nav.Link>
      </div>
      <div className="nav-right">
        <Nav.Link href="/about">ABOUT</Nav.Link>
        <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>
        <Nav.Link href="/about">CONTACT</Nav.Link>
      </div>
    </nav>
  );
}

export default Navbar;
