import { Link } from "react-router-dom";
import Reveal from "../common/Reveal.jsx";
import { t } from "../../i18n/index.js";
import "./ContactCTA.css";

export default function ContactCTA({
  eyebrow = t.home.contactCta.eyebrow,
  title = t.home.contactCta.title,
  text = t.home.contactCta.text,
  linkLabel = t.home.contactCta.linkLabel,
}) {
  return (
    <section className="contact-cta">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="font-serif contact-cta__title">{title}</h2>
          <p className="contact-cta__text">{text}</p>
          <Link to="/contact" className="contact-cta__link">
            {linkLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
