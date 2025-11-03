import Header from "../components/Header";
import Menu from "../components/Menu";



export default function Contact() {
  return (
    <>
    <Header />
    <div className="flex flex-row-reverse justify-between ">
      <Menu />
    </div>
    <section className="text-center p-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact</h1>
      <p className="text-gray-700 mb-4">
        Vous pouvez me contacter à <span className="font-semibold">marc@example.com</span>
      </p>
      <a
        href="mailto:marc@example.com"
        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
      >
        M’envoyer un message
      </a>
    </section>
    </>
  );
}
