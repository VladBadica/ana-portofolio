import { t } from "../i18n/index.js";

// Master list of photography categories the site can present.
// New categories can be added here at any time — pages and components
// read from this list rather than hardcoding category names.
export const categories = [
  { id: "animals", ...t.categories.animals },
  { id: "families", ...t.categories.families },
  { id: "portraits", ...t.categories.portraits },
  { id: "couples", ...t.categories.couples },
  { id: "lifestyle", ...t.categories.lifestyle },
  { id: "events", ...t.categories.events },
];

export function getCategory(id) {
  return categories.find((category) => category.id === id);
}
