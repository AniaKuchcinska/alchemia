"use client";

import { useEffect, useState } from "react";
import styles from "./HeroAnnouncement.module.css";

type HeroAnnouncementProps = {
  announcements: string[];
};

const DISPLAY_TIME = 7000;

export const HeroAnnouncement = ({ announcements }: HeroAnnouncementProps) => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);

  useEffect(() => {
    if (announcements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((current) => {
        setPrevious(current);
        return (current + 1) % announcements.length;
      });
    }, DISPLAY_TIME);

    return () => clearInterval(interval);
  }, [announcements]);

  const handleExitAnimationEnd = () => {
    setPrevious(null);
  };

  if (announcements.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {previous !== null && (
        <p
          className={`${styles.announcements} ${styles.leaving}`}
          onAnimationEnd={handleExitAnimationEnd}
        >
          {announcements[previous]}
        </p>
      )}

      <p
        className={`${styles.announcements} ${previous !== null ? styles.entering : styles.current}`}
      >
        {announcements[current]}
      </p>
    </div>
  );
};

export default HeroAnnouncement;
