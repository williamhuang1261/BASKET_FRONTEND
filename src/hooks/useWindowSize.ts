import { useEffect, useState } from "react";

/**
 * @returns xs: -1 | sm: 0 | md: 1 | lg: 2 | xl: 3 | 2xl: 4 | 3xl: 5
 * @description Returns the current window width with a number
 * @example
 * width: {
 *   xs: -1 (width < 640),
 *   sm: 0 (640 <= width < 768),
 *   md: 1 (768 <= width < 1024),
 *   lg: 2 (1024 <= width < 1280),
 *   xl: 3 (1280 <= width < 1536),
 *   2xl: 4 (1536 <= width < 2048),
 *   3xl: 5 (2048 <= width)
 * }
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width } = windowSize;

  if (width < 640) {
    return -1;
  }
  if (640 <= width && width < 768) {
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
