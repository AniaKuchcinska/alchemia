import Hero from "@/app/components/ui/hero/Hero";
//import "hero.webp" from "/public/hero.webp";

export default function Home() {
  return (
    <main>
      <Hero
        title="Alchemia dance studio Wrzesnia"
        banners={["Zapisy na sezon 2026/2027 sa otwarte", "Summer camp 2026"]}
        background="/hero.webp"
        backgroundType="image"
        backgroundAlt="alchemia dance studio dancers"
        cta={{
          label: "Zapisz sie",
          href: "https://alchemia.gymmanager.io/account/login",
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
}
