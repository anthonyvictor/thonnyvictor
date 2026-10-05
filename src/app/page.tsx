"use client";
import NavBarProvider, { useNavBar } from "./context/navbarContext";
import Footer from "@/app/components/organisms/Footer";
import { NavBar } from "@/app/components/organisms/NavBar";
import Services from "@/app/components/pages/Services";
import Contact from "@/app/components/pages/Contact";
import Projects from "@/app/components/pages/Projects";
import Welcome from "@/app/components/pages/Welcome";
import { Line } from "./components/atoms/Line";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import About from "./components/pages/About";

export default function App() {
  return (
    <>
      <NavBarProvider>
        <App2 />
      </NavBarProvider>
      <ToastContainer position="bottom-right" hideProgressBar theme="dark" />
    </>
  );
}

const App2 = () => {
  const { setCurrentRoute, isManualScrollingRef } = useNavBar();

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -30% 0px",
      threshold: 0.1,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      // Se o usuário clicou no menu e a tela está rolando sozinho, ignora o observer
      if (isManualScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace("-child", "");
          if (id) {
            const targetRoute = `#${id}`;

            // Só atualiza o estado se a rota atual for diferente
            setCurrentRoute((prevRoute) => {
              if (prevRoute !== targetRoute) {
                return targetRoute;
              }
              return prevRoute;
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    const pageElements = document.querySelectorAll(".page");
    pageElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [setCurrentRoute, isManualScrollingRef]);
  return (
    <div className="bg-black relative w-full max-w-full h-auto min-h-screen overflow-x-hidden overflow-y-auto">
      <NavBar />
      <Welcome />
      <Line />
      <Services />
      <Line />
      <Projects />
      <Line />
      <About />
      <Line />
      <Contact />
      <Footer />
    </div>
  );
};
