import Reveal from "../components/common/Reveal.jsx";
import { t } from "../i18n/index.js";
import "./Contact.css";

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
const contactPhone = import.meta.env.VITE_CONTACT_PHONE;

const details = [
  { label: t.contact.details.emailLabel, value: contactEmail, href: `mailto:${contactEmail}` },
  {
    label: t.contact.details.phoneLabel,
    value: contactPhone,
    href: `tel:${contactPhone.replace(/\s+/g, "")}`,
  },
  {
    label: t.contact.details.instagramLabel,
    value: t.contact.details.instagramValue,
    href: "https://instagram.com",
  },
  { label: t.contact.details.basedInLabel, value: t.contact.details.basedInValue },
];

const offerings = t.contact.offerings.items;

export default function Contact() {
  return (
    <div className="page-fade contact-page">
      <section className="contact-intro container">
        <Reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h1 className="font-serif contact-intro__title">{t.contact.title}</h1>
          <p className="contact-intro__text">{t.contact.intro}</p>
        </Reveal>
      </section>

      <section className="contact-details container">
        <Reveal as="dl" className="contact-details__list">
          {details.map((item) => (
            <div className="contact-details__row" key={item.label}>
              <dt>{item.label}</dt>
              <dd>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="contact-meta container">
        <Reveal className="contact-meta__block">
          <p className="eyebrow">{t.contact.availability.eyebrow}</p>
          <p className="contact-meta__text">{t.contact.availability.text}</p>
        </Reveal>

        <Reveal delay={100} className="contact-meta__block">
          <p className="eyebrow">{t.contact.offerings.eyebrow}</p>
          <ul className="contact-meta__list">
            {offerings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
