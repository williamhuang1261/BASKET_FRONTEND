import { useEffect, useState } from "react";

/**
 * @description Returns the current window width with a number
 * @param custom - A custom width to compare with
 * @param range - A range of width to compare with
 * @returns xs: -1 | sm: 0 | md: 1 | lg: 2 | xl: 3 | 2xl: 4 | 3xl: 5 (If custom / range is not provided)
 * @returns Under / Out of range: 0 | Over / In range: 1 (If custom / range is provided)
 * @example
 * width: {
 *   undersized: -2 (width < 320),
 *   xs: -1 (width < 640),
 *   sm: 0 (640 <= width < 768),
 *   md: 1 (768 <= width < 1024),
 *   lg: 2 (1024 <= width < 1280),
 *   xl: 3 (1280 <= width < 1536),
 *   2xl: 4 (1536 <= width < 2048),
 *   3xl: 5 (2048 <= width)
 * }
 */
const useWindowSize = (custom?: number, range?: [number, number]) => {
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

  if (custom) {
    if (width < custom) return 0;
    else return 1;
  }

  if (range) {
    if (width < range[0] || width > range[1]) return 0;
    else return 1;
  }

  if (width < 320)
    return -2; // undersized
  else if (320 <= width && width < 640)
    return -1; // xs
  else if (640 <= width && width < 768)
    return 0; // sm
  else if (768 <= width && width < 1024)
    return 1; // md
  else if (1024 <= width && width < 1280)
    return 2; // lg
  else if (1280 <= width && width < 1536)
    return 3; // xl
  else if (1536 <= width && width < 2048)
    return 4; //2xl
  else return 5; //3xl
};

export default useWindowSize;
