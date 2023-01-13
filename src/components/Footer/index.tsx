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

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_top}>
        <div className={styles.menu_list}>
          <div>
            <h2>INSTITUCIONAL</h2>
            <a>Quem Somos</a>
            <a>Política de Privacidade</a>
            <a>Segurança</a>
            <a>Seja um Revendedor</a>
          </div>
          <div>
            <h2>DÚVIDAS</h2>
            <a>Entrega</a>
            <a>Pagamento</a>
            <a>Troca e Devoluções</a>
            <a>Dúvidas Frequentes</a>
          </div>
          <div>
            <h2>FALE CONOSCO</h2>
            <a>Atendimento Ao Consumidor</a>
            <a>(11) 4159 9504</a>
            <a>Atendimento Online</a>
            <a>(11) 99433-8825</a>
          </div>
        </div>
        <div className={styles.redes_sociais}>
          <div className={styles.redes_sociais_svg}>
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
      <div className={styles.footer_bottom}>
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
          <span className={styles.traço}></span>
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
