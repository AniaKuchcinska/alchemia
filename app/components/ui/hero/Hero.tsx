"use client";
import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "../button/Button";
import HeroAnnouncement from "@/app/components/ui/hero/HeroAnnouncement";

type HeroProps = {
  title: {
    primary: string;
    secondary?: string;
  };
  cta?: {
    label: string;
    href: string;
  };
  background: string;
  backgroundType: "image" | "video";
  backgroundAlt: string;
  announcements?: string[];
};

const Hero = ({
  title,
  cta,
  background,
  backgroundType,
  backgroundAlt,
  announcements,
}: HeroProps) => {
  return (
    <section className={styles.hero}>
      {backgroundType === "video" ? (
        <video
          className={styles.background}
          src={background}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        />
      ) : (
        <Image
          className={styles.background}
          src={background}
          alt={backgroundAlt}
          fill
          sizes="100vw"
        />
      )}

      <div className={styles.overlay} aria-hidden />

      <div className={styles.content}>
        <h1
          className={styles.title}
          aria-label={
            title.secondary
              ? `${title.primary} ${title.secondary}`
              : title.primary
          }
        >
          <span className={styles.titlePrimary}>{title.primary}</span>
          {title.secondary && (
            <span className={styles.titleSecondary}>{title.secondary}</span>
          )}
        </h1>
        {announcements && announcements.length > 0 && (
          <HeroAnnouncement announcements={announcements} />
        )}
        {cta && (
          <div className={styles.heroCta}>
            <Button href={cta.href} label={cta.label} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
