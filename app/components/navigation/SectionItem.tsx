"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { SectionNavItem } from "../../data/navigation";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import styles from "./DesktopNav.module.css";

type SectionItemProps = {
  item: SectionNavItem;
};

const SectionItem = ({ item }: SectionItemProps) => {
  const intl = useTranslations();
  const pathname = usePathname();

  const isActive = item.children.some((child) => pathname === child.href);

  return (
    <NavigationMenu.Item className={styles.itemRelative}>
      <NavigationMenu.Trigger
        className={[styles.trigger, isActive ? styles.linkActive : ""]
          .filter(Boolean)
          .join(" ")}
      >
        {intl(item.translationKey)}
        <ChevronDown className={styles.chevron} aria-hidden size={14} />
      </NavigationMenu.Trigger>

      <NavigationMenu.Content className={styles.dropdownContent}>
        <ul className={styles.dropdownList}>
          {item.children.map((child) => {
            const isChildActive = pathname === child.href;
            return (
              <li key={child.id}>
                <NavigationMenu.Link asChild active={isChildActive}>
                  <Link
                    href={child.href}
                    className={styles.dropdownLink}
                    data-active={isChildActive}
                  >
                    {intl(child.translationKey)}
                  </Link>
                </NavigationMenu.Link>
              </li>
            );
          })}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};

export default SectionItem;
