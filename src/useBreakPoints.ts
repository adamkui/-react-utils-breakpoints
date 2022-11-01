import { useContext } from "react";

import { BreakPointsContext } from "./WindowContextProvider";

export const useBreakPoints = () => {
  const breakPoints = useContext(BreakPointsContext);

  return breakPoints;
};
