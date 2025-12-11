import Header from "../components/Header";
import Menu from "../components/Menu";
import { skillsCode } from "../data/skills";
import { skillsGraph } from "../data/skills";
import { Trans, useTranslation } from "react-i18next";

const Skill = () => {
   const { t } = useTranslation();

  return (
    <>
    <Header />
    <div className="flex flex-row-reverse justify-between ">
      <Menu />      
    </div>
    <section className="text-center p-5">
      <div className="flex flex-col justify-between h-screen">
        <h1 className="text-[36px] font-Orbitron font-semibold ">{t("skill.title")} </h1>
        <div className="flex flex-col items-start">
          <h2 className="text-[24px] font-Orbitron font-semibold mb-6">{t("skill.prog")} </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skillsCode.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center pr-[15px]">
                  <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-25 h-25"/>
                </div>
              ))}
            </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-[24px] font-Orbitron font-semibold mb-6 ">{t("skill.graph")} </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skillsGraph.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center pr-[15px]">
                  <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-25 h-25"/>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <a target="_blank" href="https://icons8.com/icon/12239/html">HTML</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a>*/}
    </section>
    </>
  );
}

export default Skill