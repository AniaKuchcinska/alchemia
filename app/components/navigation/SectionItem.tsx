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
  scrolled: boolean;
};

const SectionItem = ({ item, scrolled }: SectionItemProps) => {
  const intl = useTranslations();
  const pathname = usePathname();
  const isActive = item.children.some((child) => pathname === child.href);
  const scrolledAttr = scrolled ? "true" : "false";

  return (
    <NavigationMenu.Item className={styles.itemRelative}>
      <NavigationMenu.Trigger
        className={styles.trigger}
        data-active={isActive}
        data-scrolled={scrolledAttr}
      >
        {intl(item.translationKey)}
        <ChevronDown className={styles.chevron} aria-hidden size={14} />
      </NavigationMenu.Trigger>

      <NavigationMenu.Content
        className={styles.dropdownContent}
        data-scrolled={scrolledAttr}
      >
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
