import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-x-6">
        <li>
          <Link href="/jeux">Jeux</Link>
        </li>
        <li>
          <Link href="/chants">Chants</Link>
        </li>
        <li>
          <Link href="/ressources">Autres ressources</Link>
        </li>
        <li>
          <Link href="/formation">Formation</Link>
        </li>
        <li>
          <Link href="/compteur">Compteur</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/nous-soutenir">Soutenir le projet</Link>
        </li>
      </ul>
    </nav>
  );
}
