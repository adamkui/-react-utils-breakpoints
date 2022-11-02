import { ComponentType, useContext } from "react";
import { BreakPointsContext } from "./_wrappers";

export interface BreakPoints {
  XS?: number;
  SM?: number;
  MD?: number;
  LG?: number;
  XL?: number;
  XXL?: number;
  XXXL?: number;
}

export interface WithBreakPointsInjectedProps {
  breakPoints: BreakPoints;
}

export const useBreakPoints = () => {
  const breakPoints = useContext(BreakPointsContext);

  if (!breakPoints) return {};

  return breakPoints;
};

export function withBreakPoints<T>(Component: ComponentType<T>) {
  return (hocProps: T) => {
    const breakPoints = useBreakPoints();

    return <Component {...hocProps} breakPoints={breakPoints} />;
  };
}
