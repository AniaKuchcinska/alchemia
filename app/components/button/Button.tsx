import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  label: string;
};

const Button = ({ href, label }: ButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.pill}
      aria-label={label}
    >
      {label}
    </a>
  );
};

export default Button;
