import { useNavigate } from "react-router-dom";
import SectionHeading from "../common/SectionHeading.jsx";
import PortfolioGrid from "../portfolio/PortfolioGrid.jsx";
import { getFeaturedImages } from "../../data/portfolioImages.js";
import { getCategory } from "../../data/categories.js";
import { t } from "../../i18n/index.js";
import "./FeaturedWork.css";

// Home shows a curated slice of whichever categories currently have
// featured work — today that's animals, but nothing here assumes so.
export default function FeaturedWork() {
  const navigate = useNavigate();
  const images = getFeaturedImages(6);
  const primaryCategory = getCategory(images[0]?.category);

  return (
    <section className="featured-work container">
      <div className="featured-work__head">
        <SectionHeading
          eyebrow={t.home.featuredWork.eyebrow}
          title={primaryCategory ? primaryCategory.singular : t.home.featuredWork.fallbackTitle}
          lede={t.home.featuredWork.lede}
        />
        <button className="featured-work__link" onClick={() => navigate("/work")}>
          {t.home.featuredWork.viewFullPortfolio}
        </button>
      </div>

      <PortfolioGrid images={images} onImageClick={() => navigate("/work")} />
    </section>
  );
}
