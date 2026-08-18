import { defineQuery } from "next-sanity";

export const HOMEPAGE_HERO_QUERY = defineQuery(`
*[_type == "homepageHero"][0] {
    background {
    asset,
    alt
  },
  announcements,
  showSignupButton
}`);
