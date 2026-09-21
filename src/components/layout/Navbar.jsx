import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "../../i18n/LanguageContext.jsx";
import { supportedLocales } from "../../i18n/index.js";
import { social } from "../../data/social.js";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, locale, setLocale } = useTranslation();

  const links = [
    { to: "/work", label: t.nav.work },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__bar container">
        <NavLink to="/" className="navbar__logo font-serif">
          {t.nav.logo}
        </NavLink>

        <nav className="navbar__links" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="navbar__socials">
            <a
              className="navbar__icon"
              href={social.instagram.url}
              target="_blank"
              rel="noreferrer"
              aria-label={t.nav.instagramAriaLabel}
            >
              <InstagramIcon />
            </a>
            <a
              className="navbar__icon"
              href={social.tiktok.url}
              target="_blank"
              rel="noreferrer"
              aria-label={t.nav.tiktokAriaLabel}
            >
              <TikTokIcon />
            </a>
          </div>
          <LanguageSwitcher locale={locale} setLocale={setLocale} />
        </nav>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`navbar__mobile ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `navbar__mobile-link font-serif ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar__mobile-socials">
          <a
            className="navbar__mobile-icon"
            href={social.instagram.url}
            target="_blank"
            rel="noreferrer"
            aria-label={t.nav.instagramAriaLabel}
          >
            <InstagramIcon /> <span>{t.nav.instagram}</span>
          </a>
          <a
            className="navbar__mobile-icon"
            href={social.tiktok.url}
            target="_blank"
            rel="noreferrer"
            aria-label={t.nav.tiktokAriaLabel}
          >
            <TikTokIcon /> <span>{t.nav.tiktok}</span>
          </a>
        </div>
        <LanguageSwitcher locale={locale} setLocale={setLocale} className="navbar__lang--mobile" />
      </div>
    </header>
  );
}

function LanguageSwitcher({ locale, setLocale, className = "" }) {
  return (
    <div className={`navbar__lang ${className}`} role="group" aria-label="Language">
      {supportedLocales.map((code) => (
        <button
          key={code}
          type="button"
          className={`navbar__lang-option ${locale === code ? "is-active" : ""}`}
          aria-pressed={locale === code}
          onClick={() => setLocale(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.5 3v11a3.8 3.8 0 1 1-3.8-3.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 3c.25 2.4 1.9 4.2 4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}
