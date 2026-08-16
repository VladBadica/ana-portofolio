import { t } from "../../i18n/index.js";
import "./CategoryFilter.css";

// Only renders categories that currently have published work, so the
// filter row grows naturally as new categories (families, portraits...)
// receive content, instead of showing empty tabs.
export default function CategoryFilter({ categories, active, onChange }) {
  const options = [{ id: "all", label: t.categories.all }, ...categories];

  return (
    <div className="category-filter" role="tablist" aria-label={t.categories.filterAriaLabel}>
      {options.map((option) => (
        <button
          key={option.id}
          role="tab"
          aria-selected={active === option.id}
          className={`category-filter__item ${active === option.id ? "is-active" : ""}`}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
