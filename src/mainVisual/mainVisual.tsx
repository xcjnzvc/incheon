import styles from "./mainVisual.module.css";

export function MainVisual() {
  return (
    <div className={styles.container}>
      <div className={styles.text_box}>
        <h3>미래를 여는</h3>
        <h2>바다의 도시</h2>
        <p>
          인천에서 만나는 전통과 현대,
          <br />
          바다와 하늘의 조화
        </p>
      </div>
      <picture className={styles.picture}>
        <img src="./src/assets/see.png" />
      </picture>
    </div>
  );
}
