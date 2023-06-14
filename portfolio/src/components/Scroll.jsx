import React, { useRef, useEffect, useState } from "react";

function Scroll() {
  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = (e) => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth",
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  const scrollRef = useHorizontalScroll();

  return (
    <>
      <div ref={scrollRef} style={{ width: 300, overflow: "auto" }}>
        <div style={{ whiteSpace: "nowrap" }}>
          I will definitely overflow due to the small width of my parent
          container
        </div>
      </div>
    </>
  );
}

export default Scroll;
