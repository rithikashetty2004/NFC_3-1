import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [Timer, setTimer] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer("none");
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div id="preloader" className={Timer}>
        <div className="text-container">
          <svg
            className="text-stroke"
            viewBox="0 0 1000 100"
            width="90%"
            height="100%"
          >
            <text className="text" x="0" y="75">
              NEED FOR CODE 3.0
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Preloader;
