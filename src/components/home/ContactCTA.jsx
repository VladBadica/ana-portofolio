import { Link } from "react-router-dom";
import Reveal from "../common/Reveal.jsx";
import { useTranslation } from "../../i18n/LanguageContext.jsx";
import "./ContactCTA.css";

export default function ContactCTA({ eyebrow, title, text, linkLabel }) {
  const { t } = useTranslation();
  const resolvedEyebrow = eyebrow ?? t.home.contactCta.eyebrow;
  const resolvedTitle = title ?? t.home.contactCta.title;
  const resolvedText = text ?? t.home.contactCta.text;
  const resolvedLinkLabel = linkLabel ?? t.home.contactCta.linkLabel;

  return (
    <section className="contact-cta">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{resolvedEyebrow}</p>
          <h2 className="font-serif contact-cta__title">{resolvedTitle}</h2>
          <p className="contact-cta__text">{resolvedText}</p>
          <Link to="/contact" className="contact-cta__link">
            {resolvedLinkLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
