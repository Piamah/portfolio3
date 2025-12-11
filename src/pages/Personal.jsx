import Header from "../components/Header";
import Menu from "../components/Menu";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";

const Personal = () => {

  const { t } = useTranslation();
  const cards = [
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


  return (
    <>
      <Header />
      <div className="flex flex-row-reverse justify-between ">
        <Menu />
      </div>
      <section className="text-center p-10">
          <h1 className="text-6xl font-Orbitron font-semibold mb-4">{t("perso.title")}</h1>
          <p className="text-gray-700">
            {t("perso.intro")}
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
