import styles from "./Button.module.css";
import Link from "next/link";

type ButtonProps = {
  label: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

const Button = ({ label, href, external = false, onClick }: ButtonProps) => {
  if (onClick) {
    return (
      <button type="button" className={styles.pill} onClick={onClick}>
        {label}
      </button>
    );
  }

  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.pill}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href ?? "/"} className={styles.pill}>
      {label}
    </Link>
  );
};

export default Button;
