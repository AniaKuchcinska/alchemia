import { HOMEPAGE_HERO_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { HomepageHero } from "@/sanity/lib/types";

export const getHomepageHero = async (locale: "pl" | "en") => {
  const hero = await client.fetch<HomepageHero>(HOMEPAGE_HERO_QUERY);
  return {
    background: hero.background,
    announcements: hero.announcements
      .filter((announcement) => announcement.enabled)
      .map((announcement) => announcement.text[locale]),
    showSignupButton: hero.showSignupButton,
  };
};
