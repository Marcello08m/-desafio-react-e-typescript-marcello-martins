import styles from "./styles.module.scss";
import Logo from "../../assets/logoM3.png";
import Lupa from "../../assets/lupa.svg";
import Cart from "../../assets/cart.svg";

export default function Header() {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.firstDiv}>
          <img className={styles.logo} src={Logo} alt="logo m3" />
          <div className={styles.searchDiv}>
            <input type="text" placeholder="Buscar..."></input>
            <img src={Lupa} alt="lupa" />
          </div>
          <div className={styles.headerButton}>
            <button className={styles.buttonEntrar}>Entrar</button>
            <button className={styles.cartButton}>
              <img src={Cart} alt="carrinho de compra" />
            </button>
          </div>
        </div>
      </header>
      <div className={styles.secondDiv}>
        <button className={styles.secondHeaderButton}>cursos</button>
        <button className={styles.secondHeaderButton}>saiba mais</button>
        <button className={styles.secondHeaderButton}>institucionais</button>
      </div>
    </>
  );
}