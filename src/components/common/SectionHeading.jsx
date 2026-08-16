import "./SectionHeading.css";

// Consistent eyebrow + heading + optional supporting copy,
// used across Home, Portfolio, About and Contact.
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  as: Tag = "h2",
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="section-heading__title font-serif">{title}</Tag>
      {lede && <p className="section-heading__lede">{lede}</p>}
    </div>
  );
}
