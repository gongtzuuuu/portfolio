import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return <>{props.children}</>;
}

export default ScrollToTop;
