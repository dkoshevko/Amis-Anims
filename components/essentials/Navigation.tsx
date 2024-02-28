import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-6 px-4 lg:flex-row lg:px-0">
        <NavLink url="jeux" title="Jeux" />
        <NavLink url="chants" title="Chants" />
        <NavLink url="ressources" title="Autres ressources" />
        <NavLink url="formation" title="Formation" />
        <NavLink url="compteur" title="Compteur" />
        <NavLink url="contact" title="Contact" />
        <NavLink url="nous-soutenir" title="Soutenir le projet" />
      </ul>
    </nav>
  );
}
