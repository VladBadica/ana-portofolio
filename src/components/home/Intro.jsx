import Reveal from "../common/Reveal.jsx";
import { useTranslation } from "../../i18n/LanguageContext.jsx";
import "./Intro.css";

export default function Intro() {
  const { t } = useTranslation();

  return (
    <section className="intro container">
      <Reveal as="p" className="intro__text font-serif">
        {t.home.intro.part1}
        <em>{t.home.intro.emphasis}</em>
        {t.home.intro.part2}
      </Reveal>
    </section>
  );
}
