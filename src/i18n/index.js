import { en } from "./en.js";
import { ro } from "./ro.js";

export const translations = { en, ro };

// No language switcher in the UI yet — locale is fixed to English.
// Swapping this will be how the future UI toggle selects a language.
export const locale = "en";

export const t = translations[locale];
