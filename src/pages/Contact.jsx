import Header from "../components/Header";
import Menu from "../components/Menu";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(null);

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
      <div className="flex flex-row-reverse justify-between ">
        <Menu />
      </div>

      <section className="text-center p-10">
        <div>
          <h1 className="font-Rostex text-[86px] flex justify-start [text-shadow:1px_1px_1px_#DF47C9,2px_2px_1px_#DF47C9]">
            CONTACT
          </h1>
        </div>
        {/* Formulaire */}
        <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto mt-10 flex flex-col gap-6 text-left">
          <div className="flex flex-col">
            <label htmlFor="name"
            className="font-NordiquePro mb-2 text-lg">
            Nom de l'utilisateur
            </label>
            <input 
            id="name"
            name="user_name"
            type="text"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]"
            placeholder="Votre nom" required />
          </div>
          {/* User email */}
          <div className="flex flex-col">
            <label htmlFor="email"
            className="font-NordiquePro mb-2 text-lg">
              Mail de l'utilisateur
              </label>
            <input 
            id="email"
            name="user_email"
            type="email"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]" 
            placeholder="votre@email.com" required />
          </div>
          {/* Email object */}
          <div className="flex flex-col">
            <label htmlFor="subject" 
            className="font-NordiquePro mb-2 text-lg">
              Objet
              </label>
            <input 
            id="subject"
            name="subject"
            type="text"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]" 
            placeholder="Sujet du message" required />
          </div>
          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message"
            className="font-NordiquePro mb-2 text-lg">
            Message à envoyer
            </label>
            <textarea
            id="message"
            name="message"
            rows="5"
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DF47C9]"
            placeholder="Votre message..." required>
            </textarea>
          </div>
          {/* Bouton */}
          <button type="submit" 
          className="mt-4 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-transform transform hover:scale-105"
          style={{ background: "linear-gradient(90deg, var(--button-bg-start), var(--button-bg-end))" }}>
            M'envoyer un message
          </button>

          {success === true && <p className="text-green-500 mt-4">✅ Votre message a été envoyé !</p>}
          {success === false && <p className="text-red-500 mt-4">❌ Une erreur est survenue. Réessayez.</p>}
        </form>

      </section>
    </>
  );
}
