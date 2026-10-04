export function getPhotographer(t) {
  return {
    name: t.photographer.name,
    location: t.photographer.location,
    portrait:
      "https://ana-website-resources.s3.eu-central-1.amazonaws.com/portrait-ana.jpg",
    portraitAlt: t.photographer.portraitAlt,
    candid:
      "https://ana-website-resources.s3.eu-central-1.amazonaws.com/portrait-ana.jpg",
    candidAlt: t.photographer.candidAlt,
  };
}
