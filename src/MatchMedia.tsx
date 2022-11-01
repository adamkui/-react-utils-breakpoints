import { FC, ReactElement, useMemo } from "react";

import { useWindowSize } from "./useWindowSize";

interface MatchMediaProps {
  minBreakPoint?: number;
  maxBreakPoint?: number;
  children?: ReactElement<any, any>;
}

export const MatchMedia: FC<MatchMediaProps> = ({
  minBreakPoint,
  maxBreakPoint,
  children,
}) => {
  const { width } = useWindowSize();

  const renderChildren = () => {
    if (!width || !children) return null;

    if (minBreakPoint && maxBreakPoint && minBreakPoint > maxBreakPoint)
      throw new Error(
        "Invalid props: minBreakPoint has to be smaller than maxBreakPoint"
      );

    const matchMinBreakPoint =
      minBreakPoint && !maxBreakPoint && minBreakPoint <= width;
    const matchMaxBreakPoint =
      !minBreakPoint && maxBreakPoint && width <= maxBreakPoint;
    const matchBothBreakPoints =
      minBreakPoint &&
      maxBreakPoint &&
      minBreakPoint <= width &&
      width <= maxBreakPoint;

    if (matchMinBreakPoint || matchMaxBreakPoint || matchBothBreakPoints) {
      return children;
    }

    return null;
  };

  return useMemo(() => renderChildren(), [width]);
};
