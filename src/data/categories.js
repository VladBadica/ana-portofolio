// Master list of photography categories the site can present.
// New categories can be added here at any time — pages and components
// read from this list rather than hardcoding category names.
export function getCategories(t) {
  return [
    { id: "pet", ...t.categories.pet },
    { id: "nature", ...t.categories.nature },
    { id: "product", ...t.categories.product },
  ];
}

export function getCategory(id, categories) {
  return categories.find((category) => category.id === id);
}
