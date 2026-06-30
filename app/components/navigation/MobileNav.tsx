import { NavItem } from "../../data/navigation";
import { Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "./MobileNav.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type NavItems = {
  navItems: NavItem[];
};

const MobileNav = ({ navItems }: NavItems) => {
  const intl = useTranslations();
  const pathName = usePathname();
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={styles.button}
        aria-label={intl("common.open")}
      >
        <Menu size={24} />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.content}>
          <div className={styles.dialogHeader}>
            <Dialog.Close asChild>
              <Link href="/" className={styles.dialogLogo}>
                <Image
                  src="/logo.svg"
                  alt={intl("nav.logo_alt")}
                  width={100}
                  height={20}
                />
              </Link>
            </Dialog.Close>

            <Dialog.Close
              className={styles.button}
              aria-label={intl("common.close")}
            >
              <X size={24} />
            </Dialog.Close>
          </div>

          <nav className={styles.nav}>
            <Accordion.Root type="multiple" className={styles.accordion}>
              {navItems.map((item) => {
                const { id, type, translationKey } = item;
                if (type === "section") {
                  const isParentActive = item.children.some(
                    (child) => pathName === child.href,
                  );
                  return (
                    <Accordion.Item
                      value={id}
                      key={id}
                      className={styles.accordionItem}
                    >
                      <Accordion.Trigger
                        className={styles.accordionTrigger}
                        data-active={isParentActive}
                      >
                        {intl(translationKey)}
                        <ChevronDown className={styles.chevron} aria-hidden />
                      </Accordion.Trigger>

                      <Accordion.Content className={styles.accordionContent}>
                        <div className={styles.accordionInner}>
                          {item.children.map((child) => {
                            const { id, href, translationKey } = child;
                            const isActive = pathName === href;
                            return (
                              <Dialog.Close asChild key={id}>
                                <Link
                                  href={href}
                                  className={styles.childLink}
                                  data-active={isActive}
                                >
                                  {intl(translationKey)}
                                </Link>
                              </Dialog.Close>
                            );
                          })}
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  );
                }

                if (type === "external") {
                  return (
                    <a
                      key={id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {intl(translationKey)}
                      <ExternalLink
                        className={styles.externalLink}
                        aria-hidden
                      />
                    </a>
                  );
                }

                const isActive = pathName === item.href;

                return (
                  <Dialog.Close asChild key={id}>
                    <Link
                      href={item.href}
                      className={styles.link}
                      data-active={isActive}
                    >
                      {intl(translationKey)}
                    </Link>
                  </Dialog.Close>
                );
              })}
            </Accordion.Root>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default MobileNav;
