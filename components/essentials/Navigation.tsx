import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-6 lg:flex-row">
        <NavLink url="jeux" title="jeux" />
        <NavLink url="chants" title="chants" />
        <NavLink url="ressources" title="autres ressources" />
        <NavLink url="formation" title="formation" />
        <NavLink url="compteur" title="compteur" />
        <NavLink url="contact" title="contact" />
        <NavLink url="nous-soutenir" title="Soutenir le projet" />
      </ul>
    </nav>
  );
}
