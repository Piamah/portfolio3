import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import MentionsLegales from "./pages/Mentions-legales";
import Footer from "./components/Footer";


function SeoHead() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description")} />
      <meta property="og:title" content={t("meta.title")} />
      <meta property="og:locale" content={lang === "fr" ? "fr_FR" : "en_GB"} />
    </Helmet>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[linear-gradient(135deg,var(--bg-start),var(--bg-end))]">
      <SeoHead />
      <div className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;