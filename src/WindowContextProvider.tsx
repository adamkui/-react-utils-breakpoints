import { createContext } from "react";

export interface BreakPoints {
  XS?: number;
  SM?: number;
  MD?: number;
  LG?: number;
  XL?: number;
  XXL?: number;
  XXXL?: number;
}

export const BreakPointsContext = createContext<BreakPoints | undefined>(
  undefined
);

export const BreakPointsProvider = BreakPointsContext.Provider;
