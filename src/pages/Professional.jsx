import Card from "../components/Card";
import imageprojet1 from "../images/about_char.webp";
import imageprojet2 from "../images/about_char.webp";
import imageprojet3 from "../images/about_char.webp";


const Projects = () => {
  const cards = [
    { title: "Exemple de titre 1", subtitle: "Explication rapide du projet ou Techno used", year: "2025", image: imageprojet1 },
    { title: "Exemple de titre 2", subtitle: "Html + CSS", year: "2024", image: imageprojet2 },
    { title: "Exemple de titre 3", subtitle: "Procreate", year: "2023", image: imageprojet3 },
  ];

  return (
    <section className="text-center p-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Projets professionnels</h1>
      <p className="text-gray-700">
        Voici une sélection de projets réalisés dans un cadre professionnel.
      </p>
     <div className="flex flex-wrap gap-6 justify-center p-8 bg-[var(--bg)]">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
    </section>
  );
};

export default Projects;