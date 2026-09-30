// Portfolio image data — separated from presentation so new work
// (and new categories) can be added without touching any component.
//
// Fields:
//   id          unique key
//   category    must match an id in categories.js — also the exact S3
//               folder name the image lives under (pet | nature | product)
//   photoId     exact filename inside that S3 folder, e.g. "IMG_1419.jpg"
//   alt         meaningful, specific alt text
//   orientation "landscape" | "portrait" | "square" — controls crop
//   span        "wide" | "tall" | "normal" — controls grid placement
//   featured    included in the homepage Featured Work strip

const S3_BUCKET = "https://ana-website-resources.s3.eu-central-1.amazonaws.com";

function s3Url(category, photoId) {
  return `${S3_BUCKET}/${category}/${photoId}`;
}

// Real, published photography only — add entries here as files land in
// the S3 bucket. No placeholder/stock images: broken/missing files are
// worse than an empty grid.
const raw = [
  {
    id: "pet-01",
    category: "pet",
    photoId: "IMG_1365.jpg",
    orientation: "portrait",
    span: "tall",
    featured: true,
  },
  {
    id: "pet-02",
    category: "pet",
    photoId: "IMG_1403.jpg",
    orientation: "portrait",
    span: "tall",
    featured: true,
  },
  {
    id: "pet-03",
    category: "pet",
    photoId: "IMG_2574.jpg",
    orientation: "portrait",
    span: "tall",
    featured: true,
  },
  {
    id: "pet-04",
    category: "pet",
    photoId: "IMG_1216.jpg",
    orientation: "portrait",
    span: "tall",
    featured: true,
  },
  {
    id: "pet-05",
    category: "pet",
    photoId: "IMG_0009.JPG",
    orientation: "landscape",
    span: "wide",
    featured: true,
  }, {
    id: "pet-06",
    category: "pet",
    photoId: "IMG_2573.jpg",
    orientation: "portrait",
    span: "tall",
    featured: true,
  },
];

export function getPortfolioImages(t) {
  return raw.map((img) => {
    const src = s3Url(img.category, img.photoId);
    return {
      ...img,
      alt: t.portfolioImages[img.id],
      src,
      // S3 serves the original file only — no on-the-fly resizing, so
      // the grid thumbnail reuses the same image as the full view.
      thumbSrc: src,
    };
  });
}

export function getImagesByCategory(images, categoryId) {
  if (!categoryId || categoryId === "all") return images;
  return images.filter((img) => img.category === categoryId);
}

export function getFeaturedImages(images, limit = 6) {
  const featured = images.filter((img) => img.featured);
  return (featured.length ? featured : images).slice(0, limit);
}

// Categories that currently have published work — drives which filter
// pills appear on the portfolio page so empty categories stay hidden
// until real photography is added.
export function getCategoriesWithContent(categories, images) {
  const present = new Set(images.map((img) => img.category));
  return categories.filter((category) => present.has(category.id));
}
