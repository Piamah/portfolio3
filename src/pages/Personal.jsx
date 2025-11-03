import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Personal() {
  return (
    <>
      <Header />
      <div className="flex flex-row-reverse justify-between ">
        <Menu />
      </div>
      <section className="text-center p-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Projets personnels</h1>
        <p className="text-gray-700">
          Voici quelques projets personnels que j’ai développés pour apprendre et expérimenter.
        </p>
      </section>
    </>
  );
}
