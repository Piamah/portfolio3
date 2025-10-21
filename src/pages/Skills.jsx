// src/pages/Skills.jsx
export default function Skills() {
  const skills = ["React", "Vite", "TailwindCSS", "JavaScript", "GitHub"];

  return (
    <section className="text-center p-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Mes compétences</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
