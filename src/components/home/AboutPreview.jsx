import { Link } from "react-router-dom";
import Reveal from "../common/Reveal.jsx";
import { getPhotographer } from "../../data/photographer.js";
import { useTranslation } from "../../i18n/LanguageContext.jsx";
import "./AboutPreview.css";

export default function AboutPreview() {
  const { t } = useTranslation();
  const photographer = getPhotographer(t);

  return (
    <section className="about-preview container">
      <Reveal className="about-preview__image-wrap">
        <img
          className="about-preview__image"
          src={photographer.portrait}
          alt={photographer.portraitAlt}
          loading="lazy"
        />
      </Reveal>

      <Reveal delay={120} className="about-preview__content">
        <p className="eyebrow">{t.home.aboutPreview.eyebrow}</p>
        <h2 className="font-serif about-preview__title">{t.home.aboutPreview.title}</h2>
        <p className="about-preview__text">{t.home.aboutPreview.text}</p>
        <Link to="/about" className="about-preview__link">
          {t.home.aboutPreview.link}
        </Link>
      </Reveal>
    </section>
  );
}
