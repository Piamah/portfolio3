import React from "react"
import Header from "../components/Header.jsx"
import SplitText from "../components/SplitText.jsx"
import { GoLinkExternal } from "react-icons/go"
// import aboutChar from "../images/about_char.webp"
// import whoChar from "../images/who_char.webp"
// import musicChar from "../images/music_char.webp"
import albumFav from "../images/photo-album-fav.webp"
import movieFav from "../images/movie-fav.webp"
import gameFav from "../images/game-fav.webp"
import Menu from "../components/Menu.jsx"

const About = () => {
  return (
<section className="flex flex-col min-h-screen bg-[linear-gradient(135deg,var(--bg-start)_20%,var(--bg-end)_70%)]">
      <Header />
        <div className="flex flex-row-reverse justify-between ">
          <Menu />
        </div>
      <div className="mx-5 my-20 md:mx-10">
          <h1 className="text-left">
            <SplitText text="À propos de moi" className="text-2xl font-semibold bg-[linear-gradient(135deg,var(--header--bg-start)_20%,var(--header--bg-end)_70%)] p-4 rounded-[40px] shadow-lg" />
          </h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
          <p className="w-full md:w-[70%] text-justify leading-relaxed bg-[linear-gradient(135deg,var(--header--bg-start)_20%,var(--header--bg-end)_70%)] p-6 rounded-[40px] shadow-lg">
            Depuis toujours, je suis fascinée par le langage sous toutes ses formes. À un moment donné, 
            par le biais de mes études, j'ai pu approcher un autre type de langage totalement inconnu jusqu'alors :
            celui du langage… informatique. C'est en découvrant des notions comme le {" "}
            <a 
              href="https://www.cnil.fr/fr/definition/apprentissage-automatique" 
              target="_blank" rel="noreferrer" 
              className="underline hover:text-blue-600">
              Machine Learning 
              <GoLinkExternal className="inline" />
            </a>
            {" "}
            et le 
            {" "}
            <a
              href="https://www.cnil.fr/fr/definition/apprentissage-profond-deep-learning"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blue-600">
              Deep Learning 
              <GoLinkExternal className="inline" />
            </a>
            {" "}
            que j'ai commencé à me poser plusieurs questions : comment est-ce que les machines nous comprennent ? Comment arrivent-elles 
            à communiquer avec nous ?
            <br /> Pour y répondre, je me suis dit "après tout, pourquoi ne pas essayer ?". 
            Et là, boom : j'ai adoré la liberté et la créativité que ce domaine offre. Puis, ce qui me plaît par dessus tout,
            c'est que l'informatique évolue sans arrêt. Il y a toujours quelque chose de nouveau à apprendre et 
            de nouveaux problèmes à résoudre! Et ça, c'est plutôt cool. Tu pourras retrouver mon CV juste en bas du paragraphe si tu es plus intéressé.e !
            <br />
            Et tu peux retrouver mon CV juste en dessous :
            <a
              className="flex mt-3 text-blue-700 hover:text-blue-500 underline"
              href="/CV_AL_042025.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger mon CV
            </a>
          </p>
            {/* <img
              src={aboutChar}
              alt="Image de Piama"
              className="w-1/3 md:w-1/5 rounded-xl"
            /> */}
          </div>

          <h1 className="text-left mt-20">
            <SplitText
              text="Un aspect moins technique"
              className="text-2xl font-semibold bg-[linear-gradient(135deg,var(--header--bg-start)_20%,var(--header--bg-end)_70%)] p-4 rounded-[40px] shadow-lg"
            />
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
            <p className="w-full md:w-[70%] text-justify leading-relaxed bg-[linear-gradient(135deg,var(--header--bg-start)_20%,var(--header--bg-end)_70%)] p-6 rounded-[40px] shadow-lg">
            J'ai toujours eu une relation particulière avec ce qui m'entoure - les formes, les couleurs, les petits détails qui font tout...
            Le plus drôle, c'est que je suis aphantasique : je ne visualise rien dans ma tête. Tu me dis d'imaginer une pomme, je vais juste
            voir le mot, et encore... Pourtant, j'adore créer. Entre la suite Adobe, Clip Studio Paint, Procreate ou Affinity, j'ai testé pas mal d'outils
            pour donner vie à mes idées. En tout cas, autant que faire se peut. J'ai aussi touché Blender du bout des doigts.
            Ce qui m'amuse, c'est que je suis très créative et pour autant, je ne visualise rien. Pourtant, ça ne m'a jamais
            empêché de créer ce que je veux. D'ailleurs, tu peux jeter un oeil sur ma page Instagram sur laquelle je poste parfois des WebComics
            que je fais quand j'ai le temps! 
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

            {/* <img
              src={whoChar}
              alt="Image du personnage Piama"
              className="w-1/3 md:w-1/5 rounded-xl"
            /> */}
          </div>

          <h1 className="text-left mt-20">
            <SplitText
              text="Le côté un peu plus chill"
              className="text-2xl font-semibold bg-[linear-gradient(135deg,var(--header--bg-start)_20%,var(--header--bg-end)_70%)] p-4 rounded-[40px] shadow-lg"
            />
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
            <p className="w-full md:w-[70%] text-justify leading-relaxed bg-[linear-gradient(135deg,var(--header--bg-start)_20%,var(--header--bg-end)_70%)] p-6 rounded-[40px] shadow-lg">
              Parfois on en apprend plus sur quelqu'un en découvrant ce qu'il ou elle aime au quotidien. 
              Alors, j'ai selectionné pour toi juste en dessous plusieurs choses que j'aime : 
              une playlist avec plein de musiques que j'écoute régulièrement, un test de mon jeu préféré, et enfin, la review de mon film favori.
            </p>
            {/* <img
              src={musicChar}
              alt="Image de Piama qui écoute de la musique"
              className="w-1/3 md:w-1/5 rounded-xl"
            /> */}
          </div>

          <div className="flex flex-wrap justify-start gap-10 mt-10">
            <div className="flex flex-col items-center">
              <a
                href="https://open.spotify.com/playlist/2nHhXhW1yUC9pxZg4BvP7s"
                target="_blank"
                rel="noreferrer"
                aria-label="Playlist Spotify"
                className="block w-[20vh] h-[20vh] bg-cover bg-center rounded-full shadow-lg hover:scale-105 transition-transform"
                style={{ backgroundImage: `url(${albumFav})` }}
              />
              <p className="mt-2 text-center">Ma playlist incroyable</p>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://www.ign.com/articles/2018/01/25/celeste-review"
                target="_blank"
                rel="noreferrer"
                aria-label="Favorite game"
                className="block w-[20vh] h-[20vh] bg-cover bg-center rounded-full shadow-lg hover:scale-105 transition-transform"
                style={{ backgroundImage: `url(${gameFav})` }}
              />
              <p className="mt-2 text-center">Mon jeu vidéo préféré</p>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://www.rottentomatoes.com/m/spider_man_across_the_spider_verse"
                target="_blank"
                rel="noreferrer"
                aria-label="Favorite movies"
                className="block w-[20vh] h-[20vh] bg-cover bg-center rounded-full shadow-lg hover:scale-105 transition-transform"
                style={{ backgroundImage: `url(${movieFav})` }}
              />
              <p className="mt-2 text-center">Mon film préféré</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About
