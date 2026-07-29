"use client";

import MobileNav from "@/app/components/navigation/MobileNav";
import DesktopNav from "@/app/components/navigation/DesktopNav";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { navigation } from "@/app/data/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const intl = useTranslations();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo.svg"
          loading="eager"
          alt={intl("common.logo_alt")}
          width={100}
          height={20}
        />
      </Link>
      <nav aria-label={intl("nav.main_navigation")}>
        <div className={styles.mobile}>
          <MobileNav navItems={navigation} scrolled={scrolled} />
        </div>
        <div className={styles.desktop}>
          <DesktopNav navItems={navigation} scrolled={scrolled} />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
