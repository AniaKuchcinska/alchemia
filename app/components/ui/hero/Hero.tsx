"use client";
import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "../button/Button";
import HeroAnnouncement from "@/app/components/ui/hero/HeroAnnouncement";

type HeroProps = {
  title: string;
  cta?: {
    label: string;
    href: string;
  };
  background: string;
  backgroundType: "image" | "video";
  backgroundAlt: string;
  banners?: string[];
};

const Hero = ({
  title,
  cta,
  background,
  backgroundType,
  backgroundAlt,
  banners,
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
          priority
          sizes="100vw"
        />
      )}

      <div className={styles.overlay} aria-hidden />

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {banners && banners.length > 0 && (
          <HeroAnnouncement announcements={banners} />
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
