import Reveal from "../common/Reveal.jsx";
import { t } from "../../i18n/index.js";
import "./Intro.css";

export default function Intro() {
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
