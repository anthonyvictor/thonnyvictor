import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import { INavItem } from "../types/navItem";

interface INavBarContext {
  isNavBarOpen: boolean;
  setIsNavBarOpen: Dispatch<SetStateAction<boolean>>;
  currentRoute: string;
  setCurrentRoute: Dispatch<SetStateAction<string>>;
  navItems: Array<INavItem>;
  isScrolled: boolean;
  isManualScrollingRef: MutableRefObject<boolean>;
  navigateToSection: (route: string) => void;
}

const NavBarContext = createContext<INavBarContext>({} as INavBarContext);

export const NavBarProvider: FunctionComponent<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const isManualScrollingRef = useRef(false);

  const navItems = [
    { label: "HOME", route: "#home" },
    { label: "SERVIÇOS", route: "#services" },
    { label: "PROJETOS", route: "#projects" },
    { label: "SOBRE", route: "#about" },
    { label: "CONTATO", route: "#contact" },
  ];

  // Função centralizada de navegação por clique
  const navigateToSection = (route: string) => {
    setCurrentRoute(route);
    setIsNavBarOpen(false);

    // Trava o observer por 800ms durante o smooth scroll
    isManualScrollingRef.current = true;

    const targetElement = document.querySelector(route);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Libera o observer novamente após o término da rolagem
    setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 800);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavBarContext.Provider
      value={{
        isNavBarOpen,
        setIsNavBarOpen,
        navItems,
        currentRoute,
        setCurrentRoute,
        isScrolled,
        isManualScrollingRef,
        navigateToSection,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarProvider;

export const useNavBar = () => useContext(NavBarContext);
