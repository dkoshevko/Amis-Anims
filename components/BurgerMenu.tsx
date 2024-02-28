"use client";

export default function BurgerMenu() {
  function openMenu() {
    const menuBtn = document.getElementById("menu-button") as HTMLElement;
    const burger = document.getElementById("burger-menu") as HTMLElement;
    const close = document.getElementById("close-menu") as HTMLElement;

    burger.classList.toggle("hidden");
    menuBtn.classList.toggle("rotate-90");
    close.classList.toggle("hidden");
  }

  return (
    <button id="menu-button" onClick={openMenu} className="duration-500 lg:hidden">
      <div id="burger-menu" className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div id="close-menu" className="hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </button>
  );
}
