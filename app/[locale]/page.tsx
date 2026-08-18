import Hero from "@/app/components/ui/hero/Hero";
import { getHomepageHero } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { getTranslations } from "next-intl/server";

type HomeProps = {
  params: Promise<{
    locale: "pl" | "en";
  }>;
};

const Home = async ({ params }: HomeProps) => {
  const { locale } = await params;
  const heroSanity = await getHomepageHero(locale);
  const imageUrl = urlFor(heroSanity.background).url();
  const intl = await getTranslations();
  return (
    <main>
      <Hero
        title={{
          primary: intl("home.hero_title_primary"),
          secondary: intl("home.hero_title_secondary"),
        }}
        announcements={heroSanity.announcements}
        background={imageUrl}
        backgroundType="image"
        backgroundAlt={intl("home.hero_background_alt")}
        cta={{
          label: intl("home.hero_cta_label"),
          href: "/signup",
        }}
      />
      <section
        style={{
          minHeight: "200vh",
          padding: "var(--space-16) var(--space-8)",
          background: "var(--bg-page)",
        }}
      >
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
          Page content placeholder
        </p>
      </section>
    </main>
  );
};

export default Home;
