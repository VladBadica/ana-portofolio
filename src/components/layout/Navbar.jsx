import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { t } from "../../i18n/index.js";
import "./Navbar.css";

const links = [
  { to: "/work", label: t.nav.work },
  { to: "/about", label: t.nav.about },
  { to: "/contact", label: t.nav.contact },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
          <a
            className="navbar__icon"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label={t.nav.instagramAriaLabel}
          >
            <InstagramIcon />
          </a>
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
        <a
          className="navbar__mobile-icon"
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label={t.nav.instagramAriaLabel}
        >
          <InstagramIcon /> <span>{t.nav.instagram}</span>
        </a>
      </div>
    </header>
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
