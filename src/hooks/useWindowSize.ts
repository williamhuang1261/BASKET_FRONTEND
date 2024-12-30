import { useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  addEventListener("resize", () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  const { width } = windowSize;

  if (width < 768) {
    return 0; // sm
  } else if (width >= 768 && width < 1024) {
    return 1; // md
  } else if (width >= 1024 && width < 1280) {
    return 2; // lg
  } else if (width >= 1280 && width < 1536) {
    return 3; // xl
  } else if (width >= 1536 && width < 2048) {
    return 4; //2xl
  } else {
    return 5; //3xl
  }
};

export default useWindowSize;
