import styles from "./header.module.css";
import { useTranslation } from "../hooks/useTranslation";
import LanguageSelector from "./LanguageSelector";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>KANG</div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>{t("nav_attractions")}</li>
          <li>{t("nav_food")}</li>
          <li>{t("nav_history")}</li>
          <li>{t("nav_test")}</li>
        </ul>
        <LanguageSelector />
      </nav>
    </header>
  );
}
