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
      <div className="flex justify-center">
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
        <h1 className="font-Rostex text-[128px] flex justify-center capitalize text-9xl [text-shadow:1px_1px_1px_#DF47C9,2px_2px_1px_#DF47C9]">PIAMA</h1>
      </div>
    </>
  );
}
