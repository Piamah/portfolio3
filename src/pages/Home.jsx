import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Trans, useTranslation } from "react-i18next";
import SplitText from "../components/SplitText.jsx"
import { GoLinkExternal } from "react-icons/go"
import TechTicker from "../components/TechTicker";
import albumFav from "../images/photo-album-fav.webp"
import movieFav from "../images/movie-fav.webp"
import gameFav from "../images/game-fav.webp"
import Card from "../components/Card";
import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Home() {
  const location = useLocation();
  const { t } = useTranslation();

  const titles = [
    t("home.title1"),
    t("home.title2"),
    t("home.title3"),
    t("home.title4"),
  ];

  // Professional projects
  const cards = [
    { 
      title: t("projects.titlecard1"),
      subtitle: t("projects.cardtext1"),
      tech: "HTML - CSS",
      link: "https://github.com/Piamah/projet_2"
    },
    { 
      title: t("projects.titlecard2"),
      subtitle: t("projects.cardtext2"),
      tech: "HTML - CSS JavaScript",
      link: "https://github.com/Piamah/Portfolio-architecte-sophie-bluel"
    },
    { 
      title: t("projects.titlecard3"),
      subtitle: t("projects.cardtext3"),
      tech: "Lighthouse - WAVE - JavaScript",
      link: "https://github.com/Piamah/piama.github.io"
    },
    { 
      title: t("projects.titlecard4"),
      subtitle: t("projects.cardtext4"),
      tech: "JavaScript - NodeJs - React",
      link: "https://github.com/Piamah/projet_5"
    },
    { 
      title: t("projects.titlecard5"),
      subtitle: t("projects.cardtext5"), 
      tech: "MongoDB - Express - NodeJS",
      link: "https://github.com/Piamah/projet_6"
    }
  ];

  // Personal projects
  const cardsperso = [
    { 
      title: t("perso.titlecard1"),
      subtitle: t("perso.cardtext1"),
      tech: "HTML - CSS",
      link: "https://github.com/Piamah/projet_2"
    },
    { 
      title: t("perso.titlecard2"),
      subtitle: t("perso.cardtext2"),
      tech: "HTML - CSS",
      link: "https://github.com/Piamah/projet_2"
    },
    { 
      title: t("perso.titlecard3"),
      subtitle: t("perso.cardtext3"),
      tech: "HTML - CSS",
      link: "https://github.com/Piamah/projet_2"
    }
  ];

  // Contact
  const form = useRef();
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (success !== null) {
      const timer = setTimeout(() => setSuccess(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4p4oogl",
        "template_miz9f98",
        form.current,
        "lmjbq4SV8vDREMto6"
      )
      .then(
        () => { setSuccess(true); form.current.reset(); },
        (error) => { console.error(error); setSuccess(false); }
      );
  };

  return (
    <>
      <Header />

      {/* ─── TITRE PIAMA ─── */}
      <div>
      <h1 className="font-Rostex text-[clamp(3rem,14vw,9rem)] text-[var(--title)] flex justify-center px-5 py-6 my-6 capitalize [text-shadow:1px_1px_1px_#685173,2px_2px_1px_#685173]">PIAMA</h1>
     </div>

      <TechTicker />

      <main className="flex flex-col">

        {/* ─── ABOUT ─── */}
        <section className="px-5 md:px-10 my-20" id="about-section">

          <h2 className="text-left">
            <SplitText
              text={t("about.title")}
              className="font-CormorantGaramond text-[clamp(2.5rem,6vw,4rem)] font-light tracking-[0.08em] text-white [text-shadow:1px_1px_1px_#685173,2px_2px_1px_#685173]"
            />
          </h2>

          <div className="font-Jost text-[clamp(0.9rem,2vw,1.1rem)] flex flex-col gap-6 mt-10">

            <p className="text-[#685173] w-full md:w-[70%] text-justify leading-relaxed">
              <Trans
                i18nKey="about.intro"
                components={{
                  mlLink: (
                    <a href={t("about.mlLink")} target="_blank" rel="noreferrer" className="underline hover:text-[#F43ADE]">
                      Machine Learning <GoLinkExternal className="inline" />
                    </a>
                  ),
                  dlLink: (
                    <a href={t("about.dlLink")} target="_blank" rel="noreferrer" className="underline hover:text-[#F43ADE]">
                      Deep Learning <GoLinkExternal className="inline" />
                    </a>
                  )
                }}
              />
            </p>

            {/* DL CV */}
            <a
              className="hover:scale-105 transition-transform text-white w-[180px] flex justify-center p-3 bg-[linear-gradient(135deg,var(--hover-text--start)_0%,var(--hover-text--end)_100%)] rounded-[40px] shadow-lg"
              href={t("about.dlLink")}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("about.dlText")}
            </a>

            {/* ─── TECH / INSTAGRAM ─── */}
            <div
              className="w-full max-w-[900px] rounded-2xl mt-10"
              style={{
                background: "rgba(255,255,255,0.28)",
                border: "1.5px solid rgba(104,81,115,0.15)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(104,81,115,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-[0.6rem] tracking-[0.35em] uppercase opacity-55" style={{ color: "#685173", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
                    {t("subtitle.title1")}
                  </span>
                  <h3 className="mt-2 font-DMSerifDisplay text-[clamp(1.3rem,3vw,2rem)] tracking-[0.04em] text-[#685173]">
                    {t("tech.title")}
                  </h3>
                </div>
                <p className="font-Jost text-[clamp(0.9rem,2vw,1rem)] text-[#685173] text-justify leading-relaxed w-full">
                  <Trans i18nKey="tech.intro" />
                </p>
                <a
                  href="https://www.instagram.com/piama._/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #f43a9715, #bb6eaa15)",
                    border: "1.5px solid rgba(244,58,151,0.25)",
                    color: "#f43a97",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  piama._
                </a>
              </div>
            </div>

            {/* ─── CHILL ─── */}
            <div className="w-full max-w-[900px] mt-10">
              <div className="mb-8">
                <span className="text-[0.6rem] tracking-[0.35em] uppercase opacity-55" style={{ color: "#685173", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
                  {t("subtitle.title2")}
                </span>
                <h3 className="mt-2 font-DMSerifDisplay text-[clamp(1.3rem,3vw,2rem)] tracking-[0.04em] text-[#685173]">
                  {t("chill.title")}
                </h3>
              </div>

              <p className="font-Jost text-[clamp(0.9rem,2vw,1rem)] text-[#685173] text-justify leading-relaxed w-full md:w-[80%]">
                <Trans i18nKey="chill.intro" />
              </p>

              <div className="flex flex-wrap justify-start gap-8 mt-10">

                {/* Spotify */}
                <div className="flex flex-col items-center gap-3">
                  <div className="hover:scale-105 transition-transform p-[6px] rounded-[20%]" style={{ background: "linear-gradient(135deg, #ed9eff, #ff91d5)", boxShadow: "0 4px 18px rgba(244,58,151,0.2)" }}>
                    <a href="https://open.spotify.com/playlist/2nHhXhW1yUC9pxZg4BvP7s" target="_blank" rel="noreferrer" aria-label={t("chill.spotify")} className="block w-[18vh] h-[18vh] bg-cover bg-center rounded-[18%]" style={{ backgroundImage: `url(${albumFav})` }} />
                  </div>
                  <p className="text-center text-[0.7rem] tracking-[0.15em] uppercase" style={{ color: "#685173", fontFamily: "'Jost', sans-serif", opacity: 0.7 }}>
                    {t("chill.spotify")}
                  </p>
                </div>

                {/* Jeu favori */}
                <div className="flex flex-col items-center gap-3">
                  <div className="hover:scale-105 transition-transform p-[6px] rounded-[20%]" style={{ background: "linear-gradient(135deg, #ff91d5, #ed9eff)", boxShadow: "0 4px 18px rgba(244,58,151,0.2)" }}>
                    <a href="https://www.ign.com/articles/2018/01/25/celeste-review" target="_blank" rel="noreferrer" aria-label={t("chill.game")} className="block w-[18vh] h-[18vh] bg-cover bg-center rounded-[18%]" style={{ backgroundImage: `url(${gameFav})` }} />
                  </div>
                  <p className="text-center text-[0.7rem] tracking-[0.15em] uppercase" style={{ color: "#685173", fontFamily: "'Jost', sans-serif", opacity: 0.7 }}>
                    {t("chill.game")}
                  </p>
                </div>

                {/* Film favori */}
                <div className="flex flex-col items-center gap-3">
                  <div className="hover:scale-105 transition-transform p-[6px] rounded-[20%]" style={{ background: "linear-gradient(135deg, #ed9eff, #ff91d5)", boxShadow: "0 4px 18px rgba(244,58,151,0.2)" }}>
                    <a href="https://www.rottentomatoes.com/m/spider_man_across_the_spider_verse" target="_blank" rel="noreferrer" aria-label={t("chill.movie")} className="block w-[18vh] h-[18vh] bg-cover bg-center rounded-[18%]" style={{ backgroundImage: `url(${movieFav})` }} />
                  </div>
                  <p className="text-center text-[0.7rem] tracking-[0.15em] uppercase" style={{ color: "#685173", fontFamily: "'Jost', sans-serif", opacity: 0.7 }}>
                    {t("chill.movie")}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ─── PROJETS PRO ─── */}
        <section id="projects-section" className="px-5 md:px-10 mt-28">
          <div className="mb-10">
            <span className="text-[0.6rem] tracking-[0.35em] uppercase opacity-55" style={{ color: "#685173", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
              {t("subtitle.title3")}
            </span>
            <h2 className="mt-2 font-CormorantGaramond text-[clamp(2.2rem,6vw,3.8rem)] font-light tracking-[0.08em] text-white [text-shadow:1px_1px_1px_#685173,2px_2px_1px_#685173]">
              {t("projects.title")}
            </h2>
          </div>
          <p className="font-Jost text-[clamp(0.9rem,2vw,1rem)] text-[#685173] mb-8 opacity-80 w-full md:w-[65%] leading-relaxed">
            {t("projects.intro")}
          </p>
          <div className="flex flex-wrap gap-6 justify-start">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </section>

        {/* ─── PROJETS PERSO ─── */}
        <section className="px-5 md:px-10 mt-28 mb-20">
          <div className="mb-10">
            <span className="text-[0.6rem] tracking-[0.35em] uppercase opacity-55" style={{ color: "#685173", fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
              {t("subtitle.title4")}
            </span>
            <h2 className="mt-2 font-CormorantGaramond text-[clamp(2.2rem,6vw,3.8rem)] font-light tracking-[0.08em] text-white [text-shadow:1px_1px_1px_#685173,2px_2px_1px_#685173]">
              {t("perso.title")}
            </h2>
          </div>
          <p className="font-Jost text-[clamp(0.9rem,2vw,1rem)] text-[#685173] mb-8 opacity-80 w-full md:w-[65%] leading-relaxed">
            {t("perso.intro")}
          </p>
          <div className="flex flex-wrap gap-6 justify-start">
            {cardsperso.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section className="px-5 md:px-10 mt-10 pb-10" id="contact-section">
          <h2 className="font-Rostex text-[clamp(2.5rem,10vw,5.5rem)] text-[var(--title)] [text-shadow:1px_1px_1px_#685173,2px_2px_1px_#685173]">
            {t("contact.title")}
          </h2>

          <div className="flex justify-start mt-10">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 text-left w-full max-w-[500px]">

              <div className="flex flex-col">
                <label htmlFor="name" className="text-[0.7rem] tracking-[0.35em] uppercase opacity-55" style={{ color: "#000000", fontFamily: "'Jost', sans-serif" }}>
                  {t("contact.nameLabel")}
                </label>
                <input id="name" name="user_name" type="text" className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]" placeholder={t("contact.namePlaceholder")} required />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-[0.7rem] tracking-[0.35em] uppercase opacity-55" style={{ color: "#000000", fontFamily: "'Jost', sans-serif" }}>
                  {t("contact.emailLabel")}
                </label>
                <input id="email" name="user_email" type="email" className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]" placeholder={t("contact.emailPlaceholder")} required />
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-[0.7rem] tracking-[0.35em] uppercase opacity-55" style={{ color: "#000000", fontFamily: "'Jost', sans-serif" }}>
                  {t("contact.subjectLabel")}
                </label>
                <input id="subject" name="subject" type="text" className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]" placeholder={t("contact.subjectPlaceholder")} required />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-[0.7rem] tracking-[0.35em] uppercase opacity-55" style={{ color: "#000000", fontFamily: "'Jost', sans-serif" }}>
                  {t("contact.messageLabel")}
                </label>
                <textarea id="message" name="message" rows="5" className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]" placeholder={t("contact.messagePlaceholder")} required />
              </div>

              <button type="submit" className="mt-4 text-white font-semibold py-3 px-6 transition-transform transform hover:scale-105 bg-[linear-gradient(135deg,var(--hover-text--start)_0%,var(--hover-text--end)_100%)] rounded-[40px] shadow-lg">
                {t("contact.button")}
              </button>

              {success !== null && (
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
                  <div className="p-6 border-l-4 border-green-500 rounded-r-xl bg-green-50 shadow-xl w-[300px] text-center animate-fade pointer-events-auto">
                    {success
                      ? <p className="text-green-600 font-semibold">{t("contact.success")}</p>
                      : <p className="text-red-600 font-semibold">{t("contact.error")}</p>
                    }
                  </div>
                </div>
              )}

            </form>
          </div>
        </section>

      </main>
    </>
  );
}