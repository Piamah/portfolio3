import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À propos" },
    { to: "/skills", label: "Compétences" },
    { to: "/professional", label: "Projets pro" },
    { to: "/personal", label: "Projets perso" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex gap-4 p-4 bg-white shadow">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={location.pathname === link.to ? "font-bold text-blue-600" : "text-gray-700"}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
