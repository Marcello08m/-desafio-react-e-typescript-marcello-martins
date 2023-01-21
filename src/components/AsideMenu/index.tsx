import styles from "./styles.module.scss";
import Exit from "../../assets/svg/Exit.svg";
import React, { useState } from "react";

export default function AsideMenu({
  isMenuOpen,
  setMenuOpen,
}: {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`${styles.blackout} ${!isMenuOpen ? styles.invisible : ""}`}
      onClick={() => {
        setMenuOpen(!isMenuOpen);
      }}
    >
      <div className={`${styles.container} ${!isMenuOpen ? styles.aside : ""}`}>
        <div className={styles.buttonsTop}>
          <button className={styles.buttonEntrar}>Entrar</button>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className={styles.buttonExit}
          >
            <img src={Exit} alt="sair" />
          </button>
        </div>
        <div className={styles.buttonsBottom}>
          <button className={styles.secondButton}>CURSOS</button>
          <button className={styles.secondButton}>SAIBA MAIS</button>
          <button className={styles.secondButton}>INSTITUCIONAIS</button>
        </div>
      </div>
    </div>
  );
}
