import { useMemo, useState } from "react";
import SectionHeading from "../components/common/SectionHeading.jsx";
import CategoryFilter from "../components/portfolio/CategoryFilter.jsx";
import PortfolioGrid from "../components/portfolio/PortfolioGrid.jsx";
import ImageLightbox from "../components/portfolio/ImageLightbox.jsx";
import { categories } from "../data/categories.js";
import { getImagesByCategory, getCategoriesWithContent } from "../data/portfolioImages.js";
import { t } from "../i18n/index.js";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);

  const availableCategories = useMemo(() => getCategoriesWithContent(categories), []);
  const images = useMemo(() => getImagesByCategory(activeCategory), [activeCategory]);

  return (
    <div className="page-fade">
      <header className="container" style={{ paddingBlock: "clamp(3rem, 7vw, 5.5rem)" }}>
        <SectionHeading
          as="h1"
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          lede={t.portfolio.lede}
        />
      </header>

      <div className="container" style={{ marginBottom: "2.5rem" }}>
        <CategoryFilter
          categories={availableCategories}
          active={activeCategory}
          onChange={(id) => {
            setActiveCategory(id);
            setOpenIndex(null);
          }}
        />
      </div>

      <div className="container" style={{ paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
        <PortfolioGrid images={images} onImageClick={setOpenIndex} />
      </div>

      <ImageLightbox
        images={images}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </div>
  );
}
