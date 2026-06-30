import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import styles from "./DesktopNav.module.css";
import { SectionNavItem } from "../../data/navigation";

type SectionDropdownProps = {
  item: SectionNavItem;
  scrolled: boolean;
  isActive: boolean;
};

const SectionDropdown = ({
  item,
  scrolled,
  isActive,
}: SectionDropdownProps) => {
  const intl = useTranslations();
  const pathname = usePathname();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={styles.trigger}
        data-active={isActive}
        data-scrolled={scrolled}
      >
        {intl(item.translationKey)}
        <ChevronDown className={styles.chevron} aria-hidden size={14} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.dropdownContent}
          side="bottom"
          align="start"
          sideOffset={10}
        >
          <div className={styles.dropdownList}>
            {item.children.map((child) => {
              const isChildActive = pathname === child.href;

              return (
                <DropdownMenu.Item key={child.id} asChild>
                  <Link
                    href={child.href}
                    className={styles.dropdownLink}
                    data-active={isChildActive}
                  >
                    {intl(child.translationKey)}
                  </Link>
                </DropdownMenu.Item>
              );
            })}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default SectionDropdown;
