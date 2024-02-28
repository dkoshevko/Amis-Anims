import BurgerMenu from "./BurgerMenu";
import Logo from "./essentials/Logo";
import Navigation from "./essentials/Navigation";

export default function Header() {
  return (
    <header className="w-full h-20 bg-blue-300 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <BurgerMenu />
          {/* <Navigation /> */}
          <Logo />
          user
        </div>
      </div>
    </header>
  );
}
