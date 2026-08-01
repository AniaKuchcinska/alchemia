import { Menu, X, CircleUserRound } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "./MobileNav.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavProps } from "@/app/data/navigation";

const MobileNav = ({ navItems, scrolled }: NavProps) => {
  const intl = useTranslations();
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className={`${styles.button} ${scrolled ? styles.buttonScrolled : ""}`}
        aria-label={open ? intl("common.close") : intl("common.open")}
        aria-expanded={open}
        data-testid="mobile-nav-open-trigger"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.content}>
          <nav className={styles.nav}>
            <Accordion.Root
              type="single"
              collapsible
              className={styles.accordion}
            >
              {navItems.map((item) => {
                const { id, translationKey, variant } = item;

                if (variant === "external") {
                  return (
                    <a
                      key={id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <CircleUserRound size={24} strokeWidth={1} />
                      {intl(translationKey)}
                    </a>
                  );
                }

                if (variant === "signup") {
                  return (
                    <Dialog.Close asChild key={id}>
                      <Link href={item.href} className={styles.signupLink}>
                        {intl(translationKey)}
                      </Link>
                    </Dialog.Close>
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
