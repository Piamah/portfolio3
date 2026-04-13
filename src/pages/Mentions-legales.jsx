import Header from "../components/Header";
import { useTranslation } from "react-i18next";

function getCards(t) {
  return [
    {
      title: t("legal.editor.title"),
      note: t("legal.editor.note"),
      content: (
        <>
          <p><strong>{t("legal.editor.name")} :</strong> Athénaïs Lecomte</p>
          <p><strong>{t("legal.editor.status")} :</strong> {t("legal.editor.statusValue")}</p>
          <p><strong>{t("legal.editor.email")} :</strong> <span className="opacity-60">athe.devcontact@gmail.com</span></p>
          <p><strong>{t("legal.editor.pseudo")} :</strong> Piama</p>
        </>
      ),
    },
    {
      title: t("legal.host.title"),
      content: (
        <>
          <p><strong>{t("legal.host.company")} :</strong> Netlify, Inc.</p>
          <p><strong>{t("legal.host.address")} :</strong> 512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis</p>
          <p>
            <strong>{t("legal.host.site")} :</strong>{" "}
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#f43a97] underline underline-offset-[3px] hover:opacity-80 transition-opacity"
            >
              www.netlify.com
            </a>
          </p>
        </>
      ),
    },
    {
      title: t("legal.ip.title"),
      content: <p>{t("legal.ip.content")}</p>,
    },
    {
      title: t("legal.data.title"),
      content: (
        <>
          <p>{t("legal.data.p1")}</p>
          <p className="mt-3">
            {t("legal.data.p2")}{" "}
            <span className="opacity-60">athe.devcontact@gmail.com</span>
          </p>
        </>
      ),
    },
    {
      title: t("legal.cookies.title"),
      content: <p>{t("legal.cookies.content")}</p>,
    },
    {
      title: t("legal.links.title"),
      content: <p>{t("legal.links.content")}</p>,
    },
  ];
}

function LegalCard({ title, content, note }) {
  return (
    <div
      className="rounded-[18px] px-8 py-7 mb-6"
      style={{
        background: "rgba(255,255,255,0.28)",
        border: "1.5px solid rgba(104,81,115,0.15)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(104,81,115,0.06), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      <h3 className="font-DMSerifDisplay text-[clamp(1rem,2.5vw,1.2rem)] text-[#685173] mb-4 flex items-center gap-3">
        <span
          className="inline-block w-[5px] h-[5px] rounded-full flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #f43a97, #bb6eaa)" }}
          aria-hidden="true"
        />
        {title}
      </h3>
      <div className="font-Jost text-[0.9rem] leading-[1.75] text-[#685173] opacity-85 flex flex-col gap-1">
        {content}
      </div>
    </div>
  );
}

export default function MentionsLegales() {
  const { t } = useTranslation();
  const cards = getCards(t);

  return (
    <>
      <Header />
      <main className="px-5 md:px-10 py-16 max-w-[800px] mx-auto">

        <span
          className="text-[0.6rem] tracking-[0.35em] uppercase opacity-50 block mb-3"
          style={{ color: "#685173", fontFamily: "'Jost', sans-serif" }}
        >
          {t("legal.eyebrow")}
        </span>

        <h1 className="font-Rostex text-[clamp(2.5rem,10vw,5.5rem)] text-[var(--title)] [text-shadow:1px_1px_1px_#685173,2px_2px_1px_#685173]">
          {t("legal.title")}
        </h1>

        <hr
          className="border-none h-[2px] rounded-full mb-10 opacity-60"
          style={{ background: "linear-gradient(90deg, #f43a97 0%, #bb6eaa 60%, transparent 100%)" }}
        />

        {cards.map((card) => (
          <LegalCard key={card.title} {...card} />
        ))}

        <p
          className="mt-10 text-center text-[0.7rem] tracking-[0.1em] uppercase opacity-35"
          style={{ color: "#685173", fontFamily: "'Jost', sans-serif" }}
        >
          {t("legal.updatedAt")}
        </p>

      </main>
    </>
  );
}