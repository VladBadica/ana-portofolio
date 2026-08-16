// Portfolio image data — separated from presentation so new work
// (and new categories) can be added without touching any component.
//
// Fields:
//   id          unique key
//   category    must match an id in categories.js
//   src         Unsplash photo id (swap for real photography later)
//   alt         meaningful, specific alt text
//   orientation "landscape" | "portrait" | "square" — controls crop
//   span        "wide" | "tall" | "normal" — controls grid placement
//   featured    included in the homepage Featured Work strip

import { t } from "../i18n/index.js";

function unsplash(id, w, h) {
  return `https://images.unsplash.com/${id}?w=${w}&h=${h}&q=80&auto=format&fit=crop`;
}

const raw = [
  {
    id: "an-01",
    category: "animals",
    photoId: "photo-1601979031925-424e53b6caaa",
    orientation: "landscape",
    span: "wide",
    featured: true,
  },
  {
    id: "an-02",
    category: "animals",
    photoId: "photo-1441057206919-63d19fac2369",
    orientation: "landscape",
    span: "wide",
    featured: true,
  },
  {
    id: "an-03",
    category: "animals",
    photoId: "photo-1543466835-00a7907e9de1",
    orientation: "portrait",
    span: "tall",
    featured: true,
  },
  {
    id: "an-04",
    category: "animals",
    photoId: "photo-1548199973-03cce0bbc87b",
    orientation: "landscape",
    span: "wide",
  },
  {
    id: "an-05",
    category: "animals",
    photoId: "photo-1601758228041-f3b2795255f1",
    orientation: "portrait",
    span: "tall",
  },
  {
    id: "an-06",
    category: "animals",
    photoId: "photo-1583512603805-3cc6b41f3edb",
    orientation: "square",
    span: "normal",
  },
  {
    id: "an-07",
    category: "animals",
    photoId: "photo-1560807707-8cc77767d783",
    orientation: "portrait",
    span: "tall",
    featured: true,
  },
  {
    id: "an-08",
    category: "animals",
    photoId: "photo-1544568100-847a948585b9",
    orientation: "square",
    span: "normal",
  },
  {
    id: "an-09",
    category: "animals",
    photoId: "photo-1608096299210-db7e38487075",
    orientation: "square",
    span: "normal",
  },
  {
    id: "an-10",
    category: "animals",
    photoId: "photo-1552053831-71594a27632d",
    orientation: "landscape",
    span: "wide",
  },
  {
    id: "an-11",
    category: "animals",
    photoId: "photo-1598133894008-61f7fdb8cc3a",
    orientation: "portrait",
    span: "tall",
  },
  {
    id: "an-12",
    category: "animals",
    photoId: "photo-1552728089-57bdde30beb3",
    orientation: "landscape",
    span: "wide",
    featured: true,
  },
  {
    id: "an-13",
    category: "animals",
    photoId: "photo-1543852786-1cf6624b9987",
    orientation: "landscape",
    span: "wide",
  },
  {
    id: "an-14",
    category: "animals",
    photoId: "photo-1519052537078-e6302a4968d4",
    orientation: "portrait",
    span: "tall",
  },
  {
    id: "an-15",
    category: "animals",
    photoId: "photo-1596492784531-6e6eb5ea9993",
    orientation: "square",
    span: "normal",
  },
  {
    id: "an-16",
    category: "animals",
    photoId: "photo-1518717758536-85ae29035b6d",
    orientation: "portrait",
    span: "normal",
  },
  {
    id: "an-17",
    category: "animals",
    photoId: "photo-1490644658840-3f2e3f8c5625",
    orientation: "portrait",
    span: "tall",
  },
  {
    id: "an-18",
    category: "animals",
    photoId: "photo-1601758124510-52d02ddb7cbd",
    orientation: "landscape",
    span: "normal",
  },
  {
    id: "an-19",
    category: "animals",
    photoId: "photo-1595433707802-6b2626ef1c91",
    orientation: "portrait",
    span: "tall",
  },
  {
    id: "an-20",
    category: "animals",
    photoId: "photo-1490750967868-88aa4486c946",
    orientation: "landscape",
    span: "wide",
  },
  {
    id: "an-21",
    category: "animals",
    photoId: "photo-1587300003388-59208cc962cb",
    orientation: "landscape",
    span: "normal",
  },
  {
    id: "an-22",
    category: "animals",
    photoId: "photo-1524678606370-a47ad25cb82a",
    orientation: "portrait",
    span: "normal",
  },
];

const SIZE_MAP = {
  landscape: { w: 1600, h: 1067 },
  portrait: { w: 1067, h: 1400 },
  square: { w: 1200, h: 1200 },
};

export const portfolioImages = raw.map((img) => {
  const { w, h } = SIZE_MAP[img.orientation];
  return {
    ...img,
    alt: t.portfolioImages[img.id],
    src: unsplash(img.photoId, w, h),
    thumbSrc: unsplash(img.photoId, Math.round(w / 2.4), Math.round(h / 2.4)),
  };
});

export function getImagesByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return portfolioImages;
  return portfolioImages.filter((img) => img.category === categoryId);
}

export function getFeaturedImages(limit = 6) {
  const featured = portfolioImages.filter((img) => img.featured);
  return (featured.length ? featured : portfolioImages).slice(0, limit);
}

// Categories that currently have published work — drives which filter
// pills appear on the portfolio page so empty categories stay hidden
// until real photography is added.
export function getCategoriesWithContent(categories) {
  const present = new Set(portfolioImages.map((img) => img.category));
  return categories.filter((category) => present.has(category.id));
}
