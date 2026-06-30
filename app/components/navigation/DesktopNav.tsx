import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavItem } from "../../data/navigation";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import styles from "./DesktopNav.module.css";
import SectionDropdown from "@/app/components/navigation/SectionDropdown";

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

          // ── Section — dropdown ──
          if (type === "section") {
            const isActive = item.children.some(
              (child) => pathname === child.href,
            );
            return (
              <SectionDropdown
                key={id}
                item={item}
                scrolled={scrolled}
                isActive={isActive}
              />
            );
          }

          if (type === "signup") {
            return (
              <NavigationMenu.Item key={id}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={item.href}
                    className={styles.signup}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {intl(translationKey)}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          }

          // ── External link ──
          if (type === "external") {
            return (
              <NavigationMenu.Item key={id}>
                <NavigationMenu.Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  data-scrolled={scrolled}
                >
                  {intl(translationKey)}
                  <ExternalLink
                    className={styles.externalIcon}
                    aria-hidden
                    size={12}
                  />
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          }

          // ── Regular page link ──
          const isActive = pathname === item.href;
          return (
            <NavigationMenu.Item key={id}>
              <NavigationMenu.Link asChild active={isActive}>
                <Link
                  href={item.href}
                  className={styles.link}
                  data-active={isActive}
                  data-scrolled={scrolled}
                >
                  {intl(translationKey)}
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>

      {/* Viewport — where dropdown Content renders into */}
      <div className={styles.viewportWrapper}>
        <NavigationMenu.Viewport className={styles.viewport} />
      </div>
    </NavigationMenu.Root>
  );
};

export default DesktopNav;
