import Header from "../components/Header";
import Menu from "../components/Menu";
import { skillsCode } from "../data/skills";
import { skillsGraph } from "../data/skills";

export default function Skills() {
  return (
    <>
    <Header />
    <div className="flex flex-row-reverse justify-between ">
      <Menu />      
    </div>
    <section className="text-center p-5">
      <div className="flex flex-col justify-between h-screen">
        <h1 className="text-5xl font-NordiquePro">Mon savoir-faire</h1>
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-NordiquePro mb-6">En programmation web</h2>
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
          <h2 className="text-3xl font-NordiquePro mb-6">En graphisme</h2>
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
