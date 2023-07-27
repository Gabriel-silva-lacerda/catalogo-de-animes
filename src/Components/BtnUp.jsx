import React, { useEffect, useState } from "react";

const BtnUp = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopButton && (
        <button className="btn" onClick={scrollUp}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default BtnUp;
