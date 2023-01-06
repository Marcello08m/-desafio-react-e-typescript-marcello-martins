import styles from "./styles.module.scss";

export default function newsLetter() {
  return (
    <>
      <footer className={styles.newsLetter}>
        <div className={styles.firstDivNews}>
          {/* <div className={styles.containerNews}> */}
          <h2 className={styles.firstH2}>assine nossa newsletter</h2>
          <div className={styles.secondDivNews}>
            <input
              type="email"
              placeholder="E-mail"
              className={styles.newsInput}
            />
            <button className={styles.newsButton}>enviar</button>
          </div>
          {/* </div> */}
        </div>
      </footer>
    </>
  );
}
