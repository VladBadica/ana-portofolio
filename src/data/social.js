// Profile links come from env vars; the displayed @handle is derived from
// the URL's last path segment so it never drifts from the link itself.
function handleFromUrl(url) {
  if (!url) return "";
  const segment = new URL(url).pathname.split("/").filter(Boolean).pop() ?? "";
  return segment.startsWith("@") ? segment : `@${segment}`;
}

function profile(url) {
  return { url, handle: handleFromUrl(url) };
}

export const social = {
  instagram: profile(import.meta.env.VITE_INSTAGRAM_URL),
  tiktok: profile(import.meta.env.VITE_TIKTOK_URL),
};
