import styles from "./styles.module.scss";
import masterCardImg from "../../assets/img/Master.png";
import visaImg from "../../assets/img/Visa.png";
import amexImg from "../../assets/img/Amex.png";
import eloImg from "../../assets/img/Elo.png";
import hiperCardImg from "../../assets/img/Hiper.png";
import payPalImg from "../../assets/img/Paypal.png";
import boletoImg from "../../assets/img/Boleto.png";
import vtexPCI from "../../assets/img/Vtexpci.png";
import vtexSvg from "../../assets/svg/Vtexlogo.svg";
import M3Svg from "../../assets/svg/M3logo.svg";
import facebookSvg from "../../assets/svg/Facebooklogo.svg";
import instagramSvg from "../../assets/svg/Instagramlogo.svg";
import twitterSvg from "../../assets/svg/Twitterlogo.svg";
import youtubeSvg from "../../assets/svg/Youtubelogo.svg";
import linkedinSvg from "../../assets/svg/Linkedinlogo.svg";
import mais from "../../assets/svg/mais.svg";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerTop}>
        <div className={styles.menuList}>
          <div>
            <div className={styles.menuH2}>
              <h2>INSTITUCIONAL</h2>
              <button className={styles.buttonPlus}>
                <img src={mais} alt="mais" />
              </button>
            </div>
            <a>Quem Somos</a>
            <a>Política de Privacidade</a>
            <a>Segurança</a>
            <a>Seja um Revendedor</a>
          </div>
          <div>
            <div className={styles.menuH2}>
              <h2>DÚVIDAS</h2>
              <button className={styles.buttonPlus}>
                <img src={mais} alt="mais" />
              </button>
            </div>
            <a>Entrega</a>
            <a>Pagamento</a>
            <a>Troca e Devoluções</a>
            <a>Dúvidas Frequentes</a>
          </div>
          <div>
            <div className={styles.menuH2}>
              <h2>FALE CONOSCO</h2>
              <button className={styles.buttonPlus}>
                <img src={mais} alt="mais" />
              </button>
            </div>
            <a>Atendimento Ao Consumidor</a>
            <a>(11) 4159 9504</a>
            <a>Atendimento Online</a>
            <a>(11) 99433-8825</a>
          </div>
        </div>
        <div className={styles.redesSociais}>
          <div className={styles.redesSociaisSvg}>
            <img src={facebookSvg} alt="logo do facebook" />
            <img src={instagramSvg} alt="logo do instagram" />
            <img src={twitterSvg} alt="logo do twitter" />
            <img src={youtubeSvg} alt="logo do youtube" />
            <img src={linkedinSvg} alt="logo do linkedin" />
          </div>
          <div>
            <p>www.loremipsum.com</p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing <br /> Elit, Sed Do
          Eiusmod Tempor
        </p>
        <div className={styles.pagamentos}>
          <div className={styles.bandeiras}>
            <img src={masterCardImg} alt="Bandeira MasterCard" />
            <img src={visaImg} alt="Bandeira Visa" />
            <img src={amexImg} alt="Bandeira AmericanExpress" />
            <img src={eloImg} alt="Bandeira Elo" />
            <img src={hiperCardImg} alt="Bandeira HiperCard" />
            <img src={payPalImg} alt="Bandeira PayPal" />
            <img src={boletoImg} alt="Bandeira Boleto" />
          </div>
          <span className={styles.linha}></span>
          <div className={styles.certificado}>
            <img src={vtexPCI} alt="Certificado Vtex" />
          </div>
        </div>
        <div className={styles.logos}>
          <p>Powered By</p>
          <img src={vtexSvg} alt="vtex logo" />
          <p>Developed By</p>
          <img src={M3Svg} alt="M3 logo" />
        </div>
      </div>
    </footer>
  );
}
