import _ from "lodash";
import { useEffect, useState } from "react";

import { useBreakPoints } from "./useBreakPoints";

export interface WindowSizeParams {
  width?: number;
  height?: number;
  isXs?: boolean;
  isSm?: boolean;
  isMd?: boolean;
  isLg?: boolean;
  isXl?: boolean;
  is2Xl?: boolean;
  is3Xl?: boolean;
  underXs?: boolean;
  underSm?: boolean;
  underMd?: boolean;
  underLg?: boolean;
  underXl?: boolean;
  under2Xl?: boolean;
  under3Xl?: boolean;
}

const defaultWindowSizeParams: WindowSizeParams = {
  width: 0,
  height: 0,
  isXs: false,
  isSm: false,
  isMd: false,
  isLg: false,
  isXl: false,
  is2Xl: false,
  is3Xl: false,
  underXs: false,
  underSm: false,
  underMd: false,
  underLg: false,
  underXl: false,
  under2Xl: false,
  under3Xl: false,
};

export const useWindowSize = (debounceWait = 150) => {
  const breakPoints = useBreakPoints();

  const [windowSize, setWindowSize] = useState<WindowSizeParams>(
    defaultWindowSizeParams
  );

  useEffect(() => {
    const handleResize = _.debounce(() => {
      if (!breakPoints) return;
      const { XS, SM, MD, LG, XL, XXL, XXXL } = breakPoints;
      const { innerWidth, innerHeight } = window;
      setWindowSize({
        width: innerWidth,
        height: innerHeight,
        ...(SM && { isXs: innerWidth < SM }),
        ...(SM && MD && { isSm: innerWidth < MD && innerWidth >= SM }),
        ...(MD && LG && { isMd: innerWidth < LG && innerWidth >= MD }),
        ...(LG && XL && { isLg: innerWidth < XL && innerWidth >= LG }),
        ...(XL && XXL && { isXl: innerWidth < XXL && innerWidth >= XL }),
        ...(XXL && XXXL && { is2Xl: innerWidth < XXXL && innerWidth >= XXL }),
        ...(XXXL && { is3Xl: innerWidth >= XXXL }),
        ...(XS && { underXs: innerWidth < XS }),
        ...(SM && { underSm: innerWidth < SM }),
        ...(MD && { underMd: innerWidth < MD }),
        ...(LG && { underLg: innerWidth < LG }),
        ...(XL && { underXl: innerWidth < XL }),
        ...(XXL && { under2Xl: innerWidth < XXL }),
        ...(XXXL && { under3Xl: innerWidth < XXXL }),
      });
    }, debounceWait);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ...windowSize };
};
