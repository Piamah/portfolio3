import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu as MenuIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const links = [
    { to: "/", label: t("menu.home") },
    { to: "/about", label: t("menu.about") },
    { to: "/skills", label: t("menu.skills") },
    { to: "/professional", label: t("menu.proProjects") },
    { to: "/personal", label: t("menu.personalProjects") },
    { to: "/contact", label: t("menu.contact") },
  ];

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-[var(--menu)] p-6 rounded-bl-[40px] z-[99] shadow-lg">
      {/* OPEN */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-800 font-semibold"
      >
        <span className="font-Orbitron">{t("menu.title")}</span>
        {isOpen ? <X size={22} /> : <MenuIcon size={22} />}
      </button>

      {/* MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
          
          <div className="absolute right-[-25px] top-[72px] h-full w-25% min-w-[280px] bg-[var(--menu)] [box-shadow:-5px_15px_15px_0_rgba(0,0,0,0.1)] p-8 flex flex-col items-start animate-slide-in">
            
            {/* FERMER */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800 absolute top-[25px] right-9 flex items-center gap-2"
            >
              <span className="text-gray-800 font-semibold font-Orbitron">
                {t("menu.close")}
              </span>
              <X size={24} />
            </button>

            {/* Navigation */}
            <nav className="font flex flex-col gap-4 mt-12">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg ${
                    location.pathname === link.to
                      ? "font-bold gradient-text"
                      : "hover:text-[#DF47C9]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Switch langue */}
            <div className="mt-10 pt-6 border-t border-gray-300 flex gap-4">
              <button
                onClick={() => changeLang("fr")}
                className={`px-3 py-1 rounded font-semibold ${
                  i18n.language === "fr"
                    ? "text-[#DF47C9] underline"
                    : "hover:text-[#DF47C9]"
                }`}
              >
                FR
              </button>

              <button
                onClick={() => changeLang("en")}
                className={`px-3 py-1 rounded font-semibold ${
                  i18n.language === "en"
                    ? "text-[#DF47C9] underline"
                    : "hover:text-[#DF47C9]"
                }`}
              >
                EN
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
