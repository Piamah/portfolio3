import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu as MenuIcon } from "lucide-react";
import HamburgerToggle from "./Hamburger";

export default function Menu() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À propos" },
    { to: "/skills", label: "Compétences" },
    { to: "/professional", label: "Projets pro" },
    { to: "/personal", label: "Projets perso" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div>
      {/* Bouton MENU */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-800 font-semibold"
      >
        <span>MENU</span>
        {isOpen ? <X size={22} /> : <MenuIcon size={22} />}
      </button>

      {/* Bande du menu*/}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
          />
         <div className="absolute right-[-25px] top-[50px] h-full w-1/3 min-w-[280px] bg-gradient-to-br from-purple-50 to-pink-50 shadow-2xl p-8 flex flex-col items-start animate-slide-in">
            {/* Bouton  */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-700 flex items-center gap-2"
            >
              <span className="font-semibold">FERMER</span>
              <X size={24} />
            </button>

            {/* Liens */}
            <nav className="flex flex-col gap-4 mt-12">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)} // ferme le menu après clic
                  className={`text-lg ${
                    location.pathname === link.to
                      ? "font-bold text-blue-600"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
