import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import TextType from "../components/TextType";


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
      <Header />
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
    <TextType 
      text={["Hello ! Bienvenue sur mon site !", "Des questions ?", "Un projet ?", "Contacte moi !"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
    />
    </section>
  );
}
