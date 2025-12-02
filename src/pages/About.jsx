import React from "react"
import Header from "../components/Header.jsx"
import SplitText from "../components/SplitText.jsx"
import { GoLinkExternal } from "react-icons/go"
import albumFav from "../images/photo-album-fav.webp"
import movieFav from "../images/movie-fav.webp"
import gameFav from "../images/game-fav.webp"
import Menu from "../components/Menu.jsx"
import { Trans, useTranslation } from "react-i18next";


const About = () => {

   const { t } = useTranslation();

  return (
<section className="flex flex-col min-h-screen bg-[linear-gradient(135deg,var(--bg-start)_20%,var(--bg-end)_70%)]">
      <Header />
        <div className="flex flex-row-reverse justify-between ">
          <Menu />
        </div>
        {/* Partie 1 A propos de moi */}
      <div className="mx-5 my-20">
        {/* Titre */}
          <h1 className="md:mx-10 text-left">
            <SplitText text={t("about.title")} className="font-Orbitron text-[36px] font-semibold" />
          </h1>
          {/* Texte */}
        <div className="md:mx-10 flex flex-col justify-between gap-6 mt-10">
          <p className="w-full md:w-[70%] text-justify leading-relaxed">
           <Trans
        i18nKey="about.intro"
        components={{
          mlLink: (
            <a
              href={t("about.mlLink")}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#F43ADE]"
            >
              Machine Learning <GoLinkExternal className="inline" />
            </a>
          ),
          dlLink: (
            <a
              href={t("about.dlLink")}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#F43ADE]"
            >
              Deep Learning <GoLinkExternal className="inline" />
            </a>
          )
        }}
      />
          </p>
          {/* Télécharger le CV */}
           <a
              className="hover:scale-105 transition-transform text-white w-[180px] flex justify-center p-3 bg-[linear-gradient(135deg,var(--hover-text--start)_0%,var(--hover-text--end)_100%)] rounded-[40px] shadow-lg"
              href={t("about.dlLink")}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("about.dlText")}
            </a>
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            {/* ----- ON EN EST LA POUR LA TRAD ----- */}
            
          {/* Partie 2 aspect moins technique */}
          </div>
          <div className="md:mx-10 min-w-[60%] max-w-[900px] bg-[linear-gradient(135deg,#fae4fc88_20%,#F3E5F533_70%)] rounded-[20px] shadow-lg">
            <h1 className="p-6 text-left mt-20">
              <SplitText
                text="Un aspect moins technique"
                className="font-Orbitron text-[28px] font-semibold"
              />
            </h1>
            {/* Texte 2 */}
            <div className="p-6">
              <p className="w-full text-justify leading-relaxed">
              J'ai toujours eu une relation particulière avec ce qui m'entoure - les formes, les couleurs, les petits détails qui font tout...
              Le plus drôle, c'est que je suis aphantasique : je ne visualise rien dans ma tête. Tu me dis d'imaginer une pomme, je vais juste
              voir le mot, et encore... Pourtant, j'adore créer. Entre la suite Adobe, Clip Studio Paint, Procreate ou Affinity, j'ai testé pas mal d'outils
              pour donner vie à mes idées. En tout cas, autant que faire se peut. J'ai aussi touché Blender du bout des doigts.
              Ce qui m'amuse, c'est que je suis très créative et pour autant, je ne visualise rien. Pourtant, ça ne m'a jamais
              empêché de créer ce que je veux. D'ailleurs, tu peux jeter un oeil sur ma page Instagram sur laquelle je poste parfois des WebComics
              que je fais quand j'ai le temps! 
              {/* Instagram */}
                <a
                  href="https://www.instagram.com/piama._/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex mt-3 underline hover:text-blue-600"
                >
                  INSERER ICI LOGO INSTAGRAM AVEC ECRIT PIAMA
                </a>
                {" "} (va voir en vrai, il paraît que je suis marrante)
              </p>
            </div>
            {/* Partie 3 Côté un peu plus chill */}
            <h1 className="p-6 text-left mt-20">
              <SplitText
                text="Le côté un peu plus chill"
                className="font-Orbitron text-[28px] font-semibold"
              />
            </h1>
            {/* Texte 3*/}
            <div className="p-6">
              <p className="w-full text-justify leading-relaxed">
                Parfois on en apprend plus sur quelqu'un en découvrant ce qu'il ou elle aime au quotidien. 
                Alors, j'ai selectionné pour toi juste en dessous plusieurs choses que j'aime : 
                une playlist avec plein de musiques que j'écoute régulièrement, un test de mon jeu préféré, et enfin, la review de mon film favori.
              </p>
            {/*  Liens (Spotify)   */}
            <div className="flex flex-wrap justify-start gap-10 mt-10">
              <div className="flex flex-col items-center">
                <div className="hover:scale-105 transition-transform shadow-lg p-[10px] bg-[linear-gradient(135deg,var(--hover-text--end)_0%,var(--hover-text--start)_100%)] rounded-[20%]">
                <a
                  href="https://open.spotify.com/playlist/2nHhXhW1yUC9pxZg4BvP7s"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Playlist Spotify"
                  className="block w-[20vh] h-[20vh] bg-cover bg-center rounded-[40%] shadow-lg"
                  style={{ backgroundImage: `url(${albumFav})` }}
                />
                </div>
                <p className="mt-2 text-center">Ma playlist incroyable</p>
              </div>
              {/*  Liens (Jeu favori)   */}
              <div className="flex flex-col items-center">
                <div className="hover:scale-105 transition-transform shadow-lg p-[10px] bg-[linear-gradient(135deg,var(--hover-text--start)_0%,var(--hover-text--end)_100%)] rounded-[20%]">
                <a
                  href="https://www.ign.com/articles/2018/01/25/celeste-review"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Favorite game"
                  className="block w-[20vh] h-[20vh] bg-cover bg-center rounded-[40%] shadow-lg"
                  style={{ backgroundImage: `url(${gameFav})` }}
                />
                </div>
                <p className="mt-2 text-center">Mon jeu vidéo préféré</p>
              </div>
              {/*  Liens (Film préféré)   */}
              <div className="flex flex-col items-center">
                <div className="hover:scale-105 transition-transform shadow-lg p-[10px] bg-[linear-gradient(135deg,var(--hover-text--end)_0%,var(--hover-text--start)_100%)] rounded-[20%]">
                <a
                  href="https://www.rottentomatoes.com/m/spider_man_across_the_spider_verse"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Favorite movies"
                  className="block w-[20vh] h-[20vh] bg-cover bg-center rounded-[40%] shadow-lg"
                  style={{ backgroundImage: `url(${movieFav})` }}
                />
                </div>
                <p className="mt-2 text-center">Mon film préféré</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About