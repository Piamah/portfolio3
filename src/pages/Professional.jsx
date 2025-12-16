import Header from "../components/Header";
import Menu from "../components/Menu";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";


const Projects = () => {

  const { t } = useTranslation();
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
    },
    // { 
    //   title: "Portfolio 1 (publié)", 
    //   subtitle: "Premier portfolio publié, deuxième portfolio personnel réalisé.", 
    //   tech: "React",
    //   link: "https://athenais-lecomte.netlify.app/"
    // },
  ];

  return (
    <>
      <Header />
        <div className="flex flex-row-reverse justify-between ">
          <Menu />
        </div>
        <section className="text-center p-10">
         <h1 className="text-6xl font-Orbitron font-semibold mb-4">
  {t("projects.title")}
</h1>

          <p className="text-gray-700">
             {t("projects.intro")}
          </p>
        <div className="flex flex-wrap gap-6 justify-center p-8 bg-[var(--bg)]">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        </section>
    </>
  );
};

export default Projects;