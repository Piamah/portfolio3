import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import TextType from "../components/TextType";
import Menu from "../components/Menu";


export default function Home() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="flex flex-row-reverse justify-between ">
        <Menu />
      </div>
      <div className="flex justify-center pb-[135px]">
        <TextType
            text={[
              "Hello ! Bienvenue sur mon site !",
              "Des questions ?",
              "Un projet ?",
              "Contacte moi !",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
      </div>
      <div>
        <h1 className="font-Rostex text-[128px] text-[var(--title)]  flex justify-center capitalize text-9xl [text-shadow:1px_1px_1px_#685173,2px_2px_1px_#685173]">PIAMA</h1>
      </div>
    </>
  );
}
