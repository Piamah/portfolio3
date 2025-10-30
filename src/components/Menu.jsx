import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu as MenuIcon } from "lucide-react";

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
    <div className="bg-[var(--menu)] p-6 rounded-bl-[40px] z-[99] shadow-lg">
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
         <div className="absolute right-[-25px] top-[72px] h-full w-25% min-w-[280px] bg-[var(--menu)] [box-shadow:-5px_15px_15px_0_rgba(0,0,0,0.1)]  p-8 flex flex-col items-start animate-slide-in">
            {/* Bouton  */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-[25px] right-9 flex items-center gap-2"
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
                      ? "font-bold text-[#DF47C9]"
                      : "hover:text-[#DF47C9]"
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
