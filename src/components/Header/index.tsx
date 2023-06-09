import styles from "./styles.module.scss";
import Logo from "../../assets/svg/logoM3.svg";
import Lupa from "../../assets/svg/lupa.svg";
import Cart from "../../assets/svg/cart.svg";
import Menu from "../../assets/svg/menu.svg";
import AsideMenu from "../AsideMenu";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <AsideMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <header className={styles.Header}>
        <div className={styles.firstDiv}>
          <button
            className={styles.menuHamburguer}
            onClick={() => {
              setMenuOpen(true);
            }}
          >
            <img src={Menu} alt="menu" />
          </button>
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
