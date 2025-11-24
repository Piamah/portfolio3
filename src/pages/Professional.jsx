import Card from "../components/Card";
import Header from "../components/Header";
import Menu from "../components/Menu";

const Projects = () => {
  const cards = [
    { 
      title: "Agence Booki", 
      subtitle: "Intégrer l'interface du site avec du code HTML et CSS tout en  respectant la maquette Figma fournie.", 
      tech: "HTML - CSS",
      link: "https://github.com/Piamah/projet_2"
    },
    { 
      title: "Sophie Bluel", 
      subtitle: "Développer la page de présentation, la page de connexion et la modale.", 
      tech: "HTML - CSS JavaScript",
      link: "https://github.com/Piamah/Portfolio-architecte-sophie-bluel"
    },
    { 
      title: "Nina Carducci", 
      subtitle: "Optimisation SEO, optimisation des images, optimisation du code et de sa structure.", 
      tech: "Lighthouse - WAVE - JavaScript",
      link: "https://github.com/Piamah/piama.github.io"
    },
    { 
      title: "Site KASA", 
      subtitle: "Refonte du site en JavaScript avec NodeJS et React.", 
      tech: "JavaScript - NodeJs - React",
      link: "https://github.com/Piamah/projet_5"
    },
    { 
      title: "Vieux Grimoire", 
      subtitle: "Développement de la partie back-end du site et mise en place de l'API.", 
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
          <h1 className="text-6xl font-RostexRegular text-[var(--text)] mb-4">Projets professionnels</h1>
          <p className="text-gray-700">
            Vous trouverez ici mes différents projets professionels ou réalisés lors de ma formation.
          </p>
        <div className="flex flex-wrap gap-6 justify-center p-8 bg-[var(--bg)]">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <h2 className="text-6xl font-RostexRegular bg-gradient-to-r from-[#F43ADE] to-black bg-clip-text text-transparent mb-4">
Les projets un peu différents...</h2>
        <p>Inclure ici les différents projets qui ne sont pas linked (présentation de projet)</p>
        </section>
    </>
  );
};

export default Projects;