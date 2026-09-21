import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/LanguageContext.jsx";
import "./Hero.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__image-wrap">
        <img
          className="hero__image"
          src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=2400&h=1500&q=80&auto=format&fit=crop"
          alt={t.home.hero.imageAlt}
          fetchpriority="high"
        />
      </div>

      <div className="hero__content container">
        <p className="eyebrow hero__eyebrow">{t.home.hero.eyebrow}</p>
        <h1 className="hero__title font-serif">{t.home.hero.title}</h1>
        <p className="hero__sub">{t.home.hero.subtitle}</p>
        <Link to="/work" className="hero__cta">
          {t.home.hero.cta}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
