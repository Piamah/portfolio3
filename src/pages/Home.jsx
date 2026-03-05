import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import TextType from "../components/TextType";
import { Trans, useTranslation } from "react-i18next";
import SplitText from "../components/SplitText.jsx"
import { GoLinkExternal } from "react-icons/go"
import TechTicker from "../components/TechTicker";
import albumFav from "../images/photo-album-fav.webp"
import movieFav from "../images/movie-fav.webp"
import gameFav from "../images/game-fav.webp"
import Card from "../components/Card";
import { skillsCode } from "../data/skills";
import { skillsGraph } from "../data/skills";
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

      // Personals projects

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
      const timer = setTimeout(() => setSuccess (null), 5000);
      return () => clearTimeout(timer)
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
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setSuccess(false);
        }
      );
  };

  return (
    <>
      <Header />
      <div className="flex justify-center pb-[135px]">
        <TextType
            text= {titles}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
      </div>
      <div>
        <h1 className="font-Rostex text-[128px] text-[var(--title)]  flex justify-center capitalize text-9xl [text-shadow:1px_1px_1px_#685173,2px_2px_1px_#685173]">PIAMA</h1>
      </div>
      <TechTicker />
      <section className="flex flex-col min-h-screen">
        {/* *********ABOUT ME***********  */}

        <div className="mx-5 my-20" id="about-section">
          {/* Title */}
            <h2 className="md:mx-10 text-left">
              <SplitText 
              text={t("about.title")} 
              className="font-Orbitron text-[36px] font-semibold"
              />
            </h2>
            {/* Text */}
          <div className="md:mx-10 flex flex-col justify-between gap-6 mt-10">
            <p className="w-full md:w-[70%] text-justify leading-relaxed">
            <Trans
              i18nKey="about.intro"
              components={{
                mlLink: (
                  <a
                    href={t("about.mlLink")}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-[#F43ADE]"
                  >
                  Machine Learning <GoLinkExternal className="inline" />
                </a>
                  ),
                  dlLink: (
                    <a
                      href={t("about.dlLink")}
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-[#F43ADE]"
                    >
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
              
            {/* *********CHILL SECTION*********** */}

            </div>
            <div className="md:mx-10 min-w-[60%] max-w-[900px] bg-[linear-gradient(135deg,#fae4fc88_20%,#F3E5F533_70%)] rounded-[20px] shadow-lg"
            id="chill-section">
              <h3 className="p-6 text-left mt-20">
                <SplitText
                  text={t("tech.title")}
                  className="font-Orbitron text-[28px] font-semibold"
                />
              </h3>
              {/* Text 1 */}
              <div className="p-6">
                <p className="w-full text-justify leading-relaxed">
                <Trans
              i18nKey="tech.intro"
              />
                {/* Instagram */}
                  <a
                    href="https://www.instagram.com/piama._/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex mt-3 underline hover:text-blue-600"
                  >
                    INSERER ICI LOGO INSTAGRAM AVEC ECRIT PIAMA
                  </a>
                </p>
              </div>

              {/* *********CHILL SECTION (2)***********  */}
              
              <h4 className="p-6 text-left mt-20">
                <SplitText
                  text={t("chill.title")} 
                  className="font-Orbitron text-[28px] font-semibold"
                />
              </h4>
              {/* Text 2*/}
              <div className="p-6">
                <p className="w-full text-justify leading-relaxed">
                <Trans
              i18nKey="chill.intro"
              />
                </p>
              {/*  Link (Spotify)   */}
              <div className="flex flex-wrap justify-start gap-10 mt-10">
                <div className="flex flex-col items-center">
                  <div className="hover:scale-105 transition-transform shadow-lg p-[10px] bg-[linear-gradient(135deg,var(--hover-text--end)_0%,var(--hover-text--start)_100%)] rounded-[20%]">
                  <a
                    href="https://open.spotify.com/playlist/2nHhXhW1yUC9pxZg4BvP7s"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t("chill.spotify")}
                    className="block w-[20vh] h-[20vh] bg-cover bg-center rounded-[40%] shadow-lg"
                    style={{ backgroundImage: `url(${albumFav})` }}
                  />
                  </div>
                  <p className="mt-2 text-center">{t("chill.spotify")}</p>
                </div>
                {/*  Link (Fav game)   */}
                <div className="flex flex-col items-center">
                  <div className="hover:scale-105 transition-transform shadow-lg p-[10px] bg-[linear-gradient(135deg,var(--hover-text--start)_0%,var(--hover-text--end)_100%)] rounded-[20%]">
                  <a
                    href="https://www.ign.com/articles/2018/01/25/celeste-review"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t("chill.game")}
                    className="block w-[20vh] h-[20vh] bg-cover bg-center rounded-[40%] shadow-lg"
                    style={{ backgroundImage: `url(${gameFav})` }}
                  />
                  </div>
                  <p className="mt-2 text-center">{t("chill.game")}</p>
                </div>
                {/*  Link (Fav movie)   */}
                <div className="flex flex-col items-center">
                  <div className="hover:scale-105 transition-transform shadow-lg p-[10px] bg-[linear-gradient(135deg,var(--hover-text--end)_0%,var(--hover-text--start)_100%)] rounded-[20%]">
                  <a
                    href="https://www.rottentomatoes.com/m/spider_man_across_the_spider_verse"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t("chill.movie")}
                    className="block w-[20vh] h-[20vh] bg-cover bg-center rounded-[40%] shadow-lg"
                    style={{ backgroundImage: `url(${movieFav})` }}
                  />
                  </div>
                  <p className="mt-2 text-center">{t("chill.movie")}</p>
                </div>
              </div>
              </div>
          </div>
        </div>

        {/* *********PROFESSIONAL PROJECTS*********** */}
      <div id="projects-section">
        <h5 className="p-6 text-left mt-20">
          <SplitText
            text={t("chill.title")} 
            className="font-Orbitron text-[28px] font-semibold"
          />
        </h5>
          <p className="text-gray-700">
              {t("projects.intro")}
          </p>
          <div className="flex flex-wrap gap-6 justify-center p-8 bg-[var(--bg)]">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
      </div>

        {/* *********PERSONAL PROJECTS*********** */}

      <section className="text-center p-10">
        <h6 className="text-6xl font-Orbitron font-semibold mb-4">{t("perso.title")}</h6>
        <p className="text-gray-700">
          {t("perso.intro")}
        </p>
        <div className="flex flex-wrap gap-6 justify-center p-8 bg-[var(--bg)]">
          {cardsperso.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>

        {/* *********SKILLS***********  */}

        <section className="text-center p-5" id="skills-section">
              <div className="flex flex-col justify-between h-screen">
                <h1 className="text-[36px] font-Orbitron font-semibold ">{t("skill.title")} </h1>
                <div className="flex flex-col items-start">
                  <h2 className="text-[24px] font-Orbitron font-semibold mb-6">{t("skill.prog")} </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                      {skillsCode.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center justify-center pr-[15px]">
                          <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-25 h-25"/>
                        </div>
                      ))}
                    </div>
                </div>
                <div className="flex flex-col items-start">
                  <h2 className="text-[24px] font-Orbitron font-semibold mb-6 ">{t("skill.graph")} </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                      {skillsGraph.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center justify-center pr-[15px]">
                          <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-25 h-25"/>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/* <a target="_blank" href="https://icons8.com/icon/12239/html">HTML</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a>*/}
            </section>

        {/* *********CONTACT*********** */}

            <section className="text-center p-10" id="contact-section">
                <div>
                  <h1 className="font-Rostex text-[86px] text-[var(--title)] flex justify-start [text-shadow:1px_1px_1px_#685173,2px_2px_1px_#685173]">
                    {t("contact.title")}
                  </h1>
                </div>
                {/* Form */}
                <div className="flex justify-start mt-10">
                  <form
                    ref={form} 
                    onSubmit={sendEmail} 
                    className="flex flex-col gap-6 text-left w-[500px]">
                    <div className="flex flex-col">
                      <label htmlFor="name"
                      className="font-NordiquePro mb-2 text-lg">
                      {t("contact.nameLabel")}
                      </label>
                      <input 
                      id="name"
                      name="user_name"
                      type="text"
                      className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]"
                      placeholder={t("contact.namePlaceholder")}required />
                    </div>
                  {/* User email */}
                    <div className="flex flex-col">
                      <label htmlFor="email"
                      className="font-NordiquePro mb-2 text-lg">
                        {t("contact.emailLabel")}
                        </label>
                      <input 
                      id="email"
                      name="user_email"
                      type="email"
                      className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]" 
                      placeholder={t("contact.emailPlaceholder")} required />
                    </div>
                  {/* Email object */}
                    <div className="flex flex-col">
                      <label htmlFor="subject" 
                      className="font-NordiquePro mb-2 text-lg">
                        {t("contact.subjectLabel")}
                        </label>
                      <input 
                      id="subject"
                      name="subject"
                      type="text"
                      className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]" 
                      placeholder={t("contact.subjectPlaceholder")}required />
                    </div>
                  {/* Message */}
                    <div className="flex flex-col">
                      <label htmlFor="message"
                      className="font-NordiquePro mb-2 text-lg">
                      {t("contact.messageLabel")}
                      </label>
                      <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]"
                      placeholder={t("contact.messagePlaceholder")} required>
                      </textarea>
                    </div>
                  {/* Bouton */}
                    <button type="submit" 
                    className="mt-4 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-transform transform hover:scale-105 bg-[linear-gradient(135deg,var(--hover-text--start)_0%,var(--hover-text--end)_100%)] rounded-[40px] shadow-lg">
                      {t("contact.button")}
                    </button>

                    {success !== null && (
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                    z-50 pointer-events-none">
                      <div className="p-6 border-l-4 border-green-500 -6 rounded-r-xl bg-green-50 shadow-xl p-6 w-[300px]
                                      text-center animate-fade pointer-events-auto">
                        {success ? (
                          <p className="text-green-600 font-semibold">{t("contact.success")}</p>
                        ) : (
                          <p className="text-red-600 font-semibold">{t("contact.error")}</p>
                        )}
                      </div>
                    </div>
                  )}
                  </form>
                </div>
              </section>
      </section>
    </>
  );
}
