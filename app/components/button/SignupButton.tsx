import { useTranslations } from "next-intl";
import styles from "./SignupButton.module.css";

type SignupButtonProps = {
  href: string;
};

const SignupButton = ({
  href = process.env.NEXT_PUBLIC_GYMMANAGER_URL!,
}: SignupButtonProps) => {
  const intl = useTranslations();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.pill}
      aria-label={intl("nav.signupNow")}
    >
      {intl("nav.signupNow")}
    </a>
  );
};

export default SignupButton;
