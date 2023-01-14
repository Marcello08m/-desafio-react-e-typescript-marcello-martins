import styles from "./styles.module.scss";
import Home from "../../assets/svg/Home.svg";
import Arrow from "../../assets/svg/Arrow.svg";
import { useState } from "react";

export default function Institutional() {
  const [currTab, setCurrTab] = useState(0);
  return (
    <>
      <div className={styles.homeDiv}>
        <img className={styles.home} src={Home} alt="casinha" />
        <img className={styles.arrow} src={Arrow} alt="seta para direita" />
        <p className={styles.textHome}>INSTITUCIONAL</p>
      </div>
      <h1 className={styles.h1Institucional}>INSTITUCIONAL</h1>
      <div className={styles.layoutPage}>
        <div className={styles.buttonDiv}>
          <button
            className={`${styles.buttonLayout} ${
              currTab === 0 ? styles.buttonActive : ""
            }`}
            onClick={() => {
              setCurrTab(0);
            }}
          >
            Sobre
          </button>
          <button
            className={`${styles.buttonLayout} ${
              currTab === 1 ? styles.buttonActive : ""
            }`}
            onClick={() => {
              setCurrTab(1);
            }}
          >
            Forma de Pagamento
          </button>
          <button
            className={`${styles.buttonLayout} ${
              currTab === 2 ? styles.buttonActive : ""
            }`}
            onClick={() => {
              setCurrTab(2);
            }}
          >
            Entrega
          </button>
          <button
            className={`${styles.buttonLayout} ${
              currTab === 3 ? styles.buttonActive : ""
            }`}
            onClick={() => {
              setCurrTab(3);
            }}
          >
            Troca e Devolução
          </button>
          <button
            className={`${styles.buttonLayout} ${
              currTab === 4 ? styles.buttonActive : ""
            }`}
            onClick={() => {
              setCurrTab(4);
            }}
          >
            Segurança e Privacidade
          </button>
          <button
            className={`${styles.buttonLayout} ${
              currTab === 5 ? styles.buttonActive : ""
            }`}
            onClick={() => {
              setCurrTab(5);
            }}
          >
            Contato
          </button>
        </div>
        {currTab !== 5 && (
          <>
            <div className={styles.layoutText}>
              <h2 className={styles.layoutH2}>Sobre</h2>
              <p className={styles.layoutP}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
                <br /> <br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. <br /> <br />
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </div>
          </>
        )}
        {currTab === 5 && (
          <>
            <div>tchau</div>
          </>
        )}
      </div>
    </>
  );
}
