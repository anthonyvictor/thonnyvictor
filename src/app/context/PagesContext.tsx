import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  FunctionComponent,
  useContext,
} from "react";

const PageContext = createContext<{
  currentPage: ReactNode;
  setCurrentPage: Dispatch<SetStateAction<ReactNode>>;
} | null>(null);

const PageProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<ReactNode>(null);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;

const usePage = () => {
  return useContext(PageContext);
};
