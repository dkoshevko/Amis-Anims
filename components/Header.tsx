"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./essentials/Logo";
import BurgerMenu from "./essentials/BurgerMenu";
import Navigation from "./essentials/Navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Ferme le menu de navigation au clic sur un lien du menu sur mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  // Permet de mettre "isMenuOpen" à "true" lorsque la largeur de la fenêtre est supérieure à 1024px ("lg:" en Tailwind)
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    // Exécute handleResize au chargement initial de la page
    handleResize();

    // Écoute des changements de taille de la fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoyage de l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Gestion du "burger" selon le state "isMenuOpen"
  useEffect(() => {
    const menuBtn = document.getElementById("menu-button") as HTMLElement;
    const burger = document.getElementById("burger-menu") as HTMLElement;
    const close = document.getElementById("close-menu") as HTMLElement;

    burger.classList.toggle("hidden");
    menuBtn.classList.toggle("rotate-90");
    close.classList.toggle("hidden");
  }, [isMenuOpen]);

  // Fonction qu'on appelle au clic sur le "burger"
  function openMenu() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <header className="w-full h-20 bg-transparent sticky top-0 z-50">
      <div className="absolute -top-3 left-0 w-full h-full bg-white z-10"></div>
      <div className="relative container mx-auto px-4 h-full z-50">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <BurgerMenu onClick={openMenu} />
          {isMenuOpen && (
            <div
              className="
                absolute left-0 top-0 -z-10 
                pt-24
                bg-gradient-to-t from-purple-200 to-orange-100 
                h-screen w-screen 
                lg:inline-block lg:bg-none lg:w-auto lg:h-auto lg:relative lg:pt-0 lg:z-0
              "
            >
              <Navigation />
            </div>
          )}
          {/* user */}
        </div>
      </div>
    </header>
  );
}
