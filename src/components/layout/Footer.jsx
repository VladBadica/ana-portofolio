import { Link } from "react-router-dom";
import { t } from "../../i18n/index.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="font-serif footer__name">{t.nav.logo}</p>
          <p className="footer__tagline">{t.footer.tagline}</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <Link to="/work">{t.footer.work}</Link>
          <Link to="/about">{t.footer.about}</Link>
          <Link to="/contact">{t.footer.contact}</Link>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            {t.footer.instagram}
          </a>
        </nav>

        <p className="footer__meta">{t.footer.copyright(year)}</p>
      </div>
    </footer>
  );
}
