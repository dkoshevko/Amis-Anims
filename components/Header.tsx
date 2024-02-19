import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <div className="w-full h-20 bg-blue-300 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
