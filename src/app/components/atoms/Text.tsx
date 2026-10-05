import { FunctionComponent, ReactNode } from "react";
export const Text: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return <h3>{children}</h3>;
};
