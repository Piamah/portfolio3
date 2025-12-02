import Header from "../components/Header";
import Menu from "../components/Menu";
import Card from "../components/Card";

const Personal = () => {
  const cards = [
    { 
      title: "Projet personnel 1", 
      subtitle: "Test subtitle", 
      tech: "test tech",
      link: "https://github.com/Piamah/projet_5"
    },
    { 
      title: "Projet personnel 2", 
      subtitle: "Test.", 
      tech: "test",
      link: "https://github.com/Piamah/projet_5"
     },
    { 
      title: "Projet personnel 3", 
      subtitle: "Test", 
      tech: "Lighthouse - WAVE - JavaScript",
      link: "https://github.com/Piamah/projet_5"
      },
    { 
      title: "Projet personnel 4", 
      subtitle: "Test", 
      tech: "JavaScript - NodeJs - React",
      link: "https://github.com/Piamah/projet_5"
    },
    { 
      title: "Projet personnel 5", 
      subtitle: "Test la partie back-end du site et mise en place de l'API.", 
      tech: "MongoDB - Express - NodeJS",
      link: "https://github.com/Piamah/projet_6"
    },
  ];


  return (
    <>
      <Header />
      <div className="flex flex-row-reverse justify-between ">
        <Menu />
      </div>
      <section className="text-center p-10">
          <h1 className="text-6xl font-Orbitron font-semibold mb-4">Projets personnels</h1>
          <p className="text-gray-700">
            Vous trouverez ici mes différents projets personnels.
          </p>
        <div className="flex flex-wrap gap-6 justify-center p-8 bg-[var(--bg)]">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
       </section>
    </>
  );
}


export default Personal;
