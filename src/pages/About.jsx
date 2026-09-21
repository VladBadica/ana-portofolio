import Reveal from "../components/common/Reveal.jsx";
import ContactCTA from "../components/home/ContactCTA.jsx";
import { getPhotographer } from "../data/photographer.js";
import { useTranslation } from "../i18n/LanguageContext.jsx";
import "./About.css";

export default function About() {
  const { t } = useTranslation();
  const photographer = getPhotographer(t);

  return (
    <div className="page-fade about-page">
      <section className="about-hero container">
        <Reveal className="about-hero__image-wrap">
          <img src={photographer.portrait} alt={photographer.portraitAlt} />
        </Reveal>
        <Reveal delay={120} className="about-hero__content">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h1 className="font-serif about-hero__title">{t.about.title}</h1>
          <p className="about-hero__text">
            {t.about.intro1Prefix} {photographer.location}.
          </p>
          <p className="about-hero__text">{t.about.intro2}</p>
        </Reveal>
      </section>

      <section className="about-block container">
        <Reveal as="div" className="about-block__row">
          <p className="eyebrow about-block__eyebrow">{t.about.philosophy.eyebrow}</p>
          <div className="about-block__copy">
            <p>{t.about.philosophy.p1}</p>
            <p>{t.about.philosophy.p2}</p>
          </div>
        </Reveal>

        <Reveal as="div" delay={80} className="about-block__row">
          <p className="eyebrow about-block__eyebrow">{t.about.working.eyebrow}</p>
          <div className="about-block__copy">
            <p>{t.about.working.p1}</p>
            <p>{t.about.working.p2}</p>
          </div>
        </Reveal>

        <Reveal as="div" delay={160} className="about-block__row">
          <p className="eyebrow about-block__eyebrow">{t.about.expect.eyebrow}</p>
          <div className="about-block__copy">
            <p>{t.about.expect.p1}</p>
          </div>
        </Reveal>
      </section>

      <ContactCTA
        eyebrow={t.about.contactCta.eyebrow}
        title={t.about.contactCta.title}
        text={t.about.contactCta.text}
        linkLabel={t.about.contactCta.linkLabel}
      />
    </div>
  );
}
