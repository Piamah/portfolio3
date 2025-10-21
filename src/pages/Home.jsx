import { Link, useLocation } from "react-router-dom";

export default function Home() {

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
    <section className="text-center p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bienvenue sur mon portfolio</h1>
      <p className="text-gray-700">Découvrez mes projets, mes compétences et mon parcours.</p>
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
    </section>
  );
}
