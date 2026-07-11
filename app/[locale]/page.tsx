export default function Home() {
  return (
    <main>
      <section
        style={{
          height: "100dvh",
          background: "#1A1820",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: `calc(var(--nav-height) * -1)`,
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Hero placeholder to test
        </p>
      </section>

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
