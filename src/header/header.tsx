import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>KANG</div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>관광명소</li>
          <li>음식</li>
          <li>역사</li>
          <li>테스트</li>
        </ul>
        <select id="language" name="language" className={styles.lang}>
          <option value="ko">KO</option>
          <option value="en">EN</option>
        </select>
      </nav>
    </header>
  );
}
