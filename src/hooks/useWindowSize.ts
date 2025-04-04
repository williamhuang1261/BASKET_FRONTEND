import { useEffect, useState } from "react";

/**
 * @description Returns the current window width with a number
 * @param custom - A custom width to compare with
 * @param range - A range of width to compare with
 * @returns xs: -1 | sm: 0 | md: 1 | lg: 2 | xl: 3 | 2xl: 4 | 3xl: 5 (If custom / range is not provided)
 * @returns Under / Out of range: 0 | Over / In range: 1 (If custom / range is provided)
 * @example
 * width: {
 *   undersized: -2 (width < 280),
 *   xs: -1 (width < 560),
 *   sm: 0 (560 <= width < 593.25),
 *   md: 1 (593.25 <= width < 896),
 *   lg: 2 (896 <= width < 1120),
 *   xl: 3 (1120 <= width < 1344),
 *   2xl: 4 (1344 <= width < 1792),
 *   3xl: 5 (1792 <= width)
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

  if (width < 280)
    return -2; // undersized
  else if (280 <= width && width < 560)
    return -1; // xs
  else if (560 <= width && width < 593.25)
    return 0; // sm
  else if (593.25 <= width && width < 896)
    return 1; // md
  else if (896 <= width && width < 1120)
    return 2; // lg
  else if (1120 <= width && width < 1344)
    return 3; // xl
  else if (1344 <= width && width < 1792)
    return 4; //2xl
  else return 5; //3xl
};

export default useWindowSize;
