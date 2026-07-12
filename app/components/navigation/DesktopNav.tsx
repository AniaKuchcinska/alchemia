"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavItem } from "../../data/navigation";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import styles from "./DesktopNav.module.css";
import SectionItem from "@/app/components/navigation/SectionItem";
import Button from "@/app/components/button/Button";

type DesktopNavProps = {
  navItems: NavItem[];
  scrolled: boolean;
};

const DesktopNav = ({ navItems, scrolled }: DesktopNavProps) => {
  const intl = useTranslations();
  const pathname = usePathname();

  return (
    <NavigationMenu.Root className={styles.root}>
      <NavigationMenu.List className={styles.list}>
        {navItems.map((item) => {
          const { id, type, translationKey } = item;

          if (type === "section") {
            return <SectionItem key={id} item={item} scrolled={scrolled} />;
          }

          if (type === "signup") {
            return (
              <NavigationMenu.Item key={id}>
                <NavigationMenu.Link asChild>
                  <Button
                    href={item.href}
                    label={intl(translationKey)}
                    external
                  />
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          }

          if (type === "external") {
            return (
              <NavigationMenu.Item key={id}>
                <NavigationMenu.Link asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} ${scrolled ? styles.linkScrolled : ""}`}
                  >
                    {intl(translationKey)}
                    <ExternalLink
                      className={styles.externalIcon}
                      aria-hidden
                      size={12}
                    />
                  </a>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          }

          const isActive = pathname === item.href;
          return (
            <NavigationMenu.Item key={id}>
              <NavigationMenu.Link asChild active={isActive}>
                <Link
                  href={item.href}
                  className={[
                    styles.link,
                    scrolled ? styles.linkScrolled : "",
                    isActive ? styles.linkActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {intl(translationKey)}
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default DesktopNav;
