import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../common/SectionHeading.jsx";
import PortfolioGrid from "../portfolio/PortfolioGrid.jsx";
import { getPortfolioImages, getFeaturedImages } from "../../data/portfolioImages.js";
import { getCategories, getCategory } from "../../data/categories.js";
import { useTranslation } from "../../i18n/LanguageContext.jsx";
import "./FeaturedWork.css";

// Home shows a curated slice of whichever categories currently have
// featured work — today that's animals, but nothing here assumes so.
export default function FeaturedWork() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const images = useMemo(() => getFeaturedImages(getPortfolioImages(t), 6), [t]);
  const categories = useMemo(() => getCategories(t), [t]);
  const primaryCategory = getCategory(images[0]?.category, categories);

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
