"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import styles from "./DesktopNav.module.css";
import { CircleUserRound } from "lucide-react";
import { NavProps } from "@/app/data/navigation";

const DesktopNav = ({ navItems, scrolled }: NavProps) => {
  const intl = useTranslations();
  const pathname = usePathname();

  return (
    <NavigationMenu.Root className={styles.root}>
      <NavigationMenu.List className={styles.list}>
        {navItems.map((item) => {
          const { id, translationKey, variant } = item;

          if (variant === "signup") {
            return (
              <NavigationMenu.Item key={id}>
                <NavigationMenu.Link asChild>
                  <Link href={item.href} className={styles.signupLink}>
                    {intl(translationKey)}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          }

          if (variant === "external") {
            return (
              <NavigationMenu.Item key={id}>
                <NavigationMenu.Link asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={intl("nav.client_panel_title")}
                    className={[
                      styles.clientPanel,
                      scrolled ? styles.clientPanelScrolled : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <CircleUserRound size={36} strokeWidth={1} />
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
                  aria-current={isActive ? "page" : undefined}
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
