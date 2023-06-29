import { NavLink } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage(props) {
  return (
    <section id="errorpage">
      <div className="errorpage-container">
        <h1 className="error-title">404</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Oops!</span> Page not found.
        </p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <NavLink to={"/"} className="dark-button">
          Go Home
        </NavLink>
      </div>
    </section>
  );
}

export default ErrorPage;
