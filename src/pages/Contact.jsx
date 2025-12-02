import Header from "../components/Header";
import Menu from "../components/Menu";
import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
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
      <div className="flex flex-row-reverse justify-between ">
        <Menu />
      </div>

      <section className="text-center p-10">
        <div>
          <h1 className="font-Rostex text-[86px] text-[var(--title)] flex justify-start [text-shadow:1px_1px_1px_#685173,2px_2px_1px_#685173]">
            CONTACT
          </h1>
        </div>
        {/* Formulaire */}
        <div className="flex justify-start mt-10">
          <form
            ref={form} 
            onSubmit={sendEmail} 
            className="flex flex-col gap-6 text-left w-[500px]">
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
            className="mt-4 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-transform transform hover:scale-105 bg-[linear-gradient(135deg,var(--hover-text--start)_0%,var(--hover-text--end)_100%)] rounded-[40px] shadow-lg">
              M'envoyer un message
            </button>

            {success !== null && (
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            z-50 pointer-events-none">
              <div className="p-6 border-l-4 border-green-500 -6 rounded-r-xl bg-green-50 shadow-xl p-6 w-[300px]
                              text-center animate-fade pointer-events-auto">
                {success ? (
                  <p className="text-green-600 font-semibold"> Votre message a bien été envoyé !</p>
                ) : (
                  <p className="text-red-600 font-semibold"> Une erreur est survenue. Réessayez.</p>
                )}
              </div>
            </div>
          )}
          </form>
        </div>
      </section>
  </>
);
}
