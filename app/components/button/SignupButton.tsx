import { useTranslations } from "next-intl";
import styles from "./SignupButton.module.css";

const GYMMANAGER_URL = process.env.NEXT_PUBLIC_GYMMANAGER_URL!;

const SignupButton = () => {
  const intl = useTranslations();

  return (
    <a
      href={GYMMANAGER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.pill}
      aria-label={intl("nav.signupNow")}
    >
      <span className={styles.dot} aria-hidden />
      {intl("nav.signupNow")}
    </a>
  );
};

export default SignupButton;
