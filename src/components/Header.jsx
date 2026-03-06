import { useState, useEffect } from "react";
import logo from "../images/logo.webp";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen,   setMenuOpen]   = useState(false);

  const navLinks = [
    { href: "#about-section",    label: t("nav.title1") },
    { href: "#projects-section", label: t("nav.title2") },
    { href: "#contact-section",   label: t("nav.title3") },
  ];
  const [scrolled,   setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // ********BLUR SCROLL EFFECT********
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ********CLOSE MENU WHEN CLICK OUTSIDE********
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @keyframes hdr-fadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hdr-menuIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hdr-root { animation: hdr-fadeDown .5s ease both; }

        .hdr-link {
          position: relative;
          font-family: 'Jost';
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #685173;
          text-decoration: none;
          padding-bottom: 2px;
          transition: color .2s;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .hdr-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          height: 1.5px;
          width: 0;
          border-radius: 999px;
          background: linear-gradient(90deg, #f43a97, #bb6eaa);
          transition: width .25s ease;
        }
        .hdr-link:hover { color: #f43a97; }
        .hdr-link:hover::after,
        .hdr-link.active::after { width: 100%; }
        .hdr-link.active { color: #f43a97; }

        .hdr-burger span {
          display: block;
          height: 1.5px;
          border-radius: 999px;
          background: #685173;
          transition: all .25s ease;
          transform-origin: center;
        }
        .hdr-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hdr-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hdr-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .hdr-mobile-menu {
          animation: hdr-menuIn .25s ease both;
        }
      `}</style>

      <header
        className={`hdr-root fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 shadow-lg"
            : "py-3"
        }`}
        style={{
          background: scrolled
            ? "rgba(249,234,246,0.85)"
            : "rgba(249,234,246,0.7)",
          backdropFilter: "blur(14px)",
          borderBottom: scrolled
            ? "1px solid rgba(104,81,115,0.15)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-6">

          {/*********LOGO*********/}
          <a
            href="https://github.com/Piamah"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <img
              src={logo}
              alt="Logo Piama"
              className="w-auto h-9 md:h-11 transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* ********NAV BAR DESKTOP******** */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`hdr-link ${activeLink === href ? "active" : ""}`}
                onClick={() => setActiveLink(href)}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ********NAME******** */}
          <div className="hidden md:flex items-center gap-4">
            <span
              className="text-[0.7rem] tracking-[0.2em] uppercase"
              style={{ color: "#a08aaa", fontFamily: "Jost" }}
            >
              Athénaïs Lecomte
            </span>
          </div>

          {/* ********BURGER MOBILE*********/}
          <button
            className={`hdr-burger md:hidden flex flex-col gap-[5px] w-6 p-0 bg-transparent border-none cursor-pointer ${menuOpen ? "open" : ""}`}
            onClick={(e) => { e.stopPropagation(); setMenuOpen(o => !o); }}
            aria-label="Menu"
          >
            <span className="w-6" />
            <span className="w-4" />
            <span className="w-6" />
          </button>
        </div>

        {/* ********MENU MOBILE*********/}
        {menuOpen && (
          <div
            className="hdr-mobile-menu md:hidden mx-4 mt-2 mb-1 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(249,234,246,0.95)",
              border: "1.5px solid rgba(104,81,115,0.15)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(104,81,115,0.12)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col py-2">
              {navLinks.map(({ href, label }, i) => (
                <a
                  key={href}
                  href={href}
                  className="px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors duration-150 hover:text-[#f43a97]"
                  style={{
                    color: "#685173",
                    fontFamily: "'NordiquePro', sans-serif",
                    borderBottom: i < navLinks.length - 1 ? "1px solid rgba(104,81,115,0.08)" : "none",
                  }}
                  onClick={() => { setActiveLink(href); setMenuOpen(false); }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
      <div className="h-[60px] md:h-[68px]" />
    </>
  );
}