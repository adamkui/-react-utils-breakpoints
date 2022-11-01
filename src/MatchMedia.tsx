import { FC, ReactElement, useMemo } from "react";

import { useWindowSize } from "./useWindowSize";

interface MatchMediaProps {
  min?: number;
  max?: number;
  children?: ReactElement<any, any>;
}

export const MatchMedia: FC<MatchMediaProps> = ({ min, max, children }) => {
  const { width } = useWindowSize();

  const renderChildren = () => {
    if (!width || !children) return null;

    if (min && max && min > max)
      throw new Error(
        "Invalid props: minBreakPoint has to be smaller than maxBreakPoint"
      );

    const matchMinBreakPoint = min && !max && min <= width;
    const matchMaxBreakPoint = !min && max && width <= max;
    const matchBothBreakPoints = min && max && min <= width && width <= max;

    if (matchMinBreakPoint || matchMaxBreakPoint || matchBothBreakPoints) {
      return children;
    }

    return null;
  };

  return useMemo(() => renderChildren(), [width]);
};
