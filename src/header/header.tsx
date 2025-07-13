import styles from "./header.module.css";

export function Header() {
  return (
    <header>
      <div className={styles.logo}>KANG</div>
      <nav>
        <ul>
          <li>관광명소</li>
          <li>음식</li>
          <li>역사</li>
          <li>테스트</li>
        </ul>
      </nav>
      <button>KO</button>
    </header>
  );
}
