import Reveal from "../common/Reveal.jsx";
import { useTranslation } from "../../i18n/LanguageContext.jsx";
import "./PortfolioGrid.css";

// Generic, category-agnostic editorial grid. Placement comes entirely
// from each image's `span`/`orientation` fields in the data layer, so
// new categories slot in without any markup changes here.
export default function PortfolioGrid({ images, onImageClick }) {
  const { t } = useTranslation();

  return (
    <ul className="portfolio-grid">
      {images.map((image, index) => (
        <li
          key={image.id}
          className={`portfolio-grid__item portfolio-grid__item--${image.span} portfolio-grid__item--${image.orientation}`}
        >
          <Reveal delay={(index % 6) * 60}>
            <button
              type="button"
              className="portfolio-grid__frame"
              onClick={() => onImageClick?.(index)}
              aria-label={t.lightbox.openLargerView(image.alt)}
            >
              <img
                src={image.thumbSrc}
                alt={image.alt}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
              />
            </button>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
