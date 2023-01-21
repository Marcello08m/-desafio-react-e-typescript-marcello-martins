import styles from "./styles.module.scss";
import Home from "../../assets/svg/Home.svg";
import Arrow from "../../assets/svg/Arrow.svg";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import "yup-phone";
import { cpf } from "cpf-cnpj-validator";

export default function Institutional() {
  const [currTab, setCurrTab] = useState(0);
  const [hasSubmited, setSubmited] = useState(false);
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "*Nome muito curto")
      .required("*Campo Obrigatório"),
    email: yup.string().email("*Email inválido").required("*Campo Obrigatório"),
    CPF: yup
      .string()
      .required("*Campo Obrigatório")
      .test("Válida CPF", "*CPF inválido", (CPF = "") =>
        cpf.isValid(CPF, true)
      ),
    birthDate: yup.string().required("*Campo Obrigatório"),
    phone: yup
      .string()
      .required("*Campo Obrigatório")
      .phone("BR", false, "*Telefone inválido"),
    instagram: yup.string(),
    check: yup.boolean().oneOf([true]).required(),
  });
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
            <div className={styles.formDiv}>
              <h2 className={styles.formH2}>Preencha o formulário</h2>
              <Formik
                validationSchema={validationSchema}
                onSubmit={() => {
                  setSubmited(true);
                }}
                initialValues={{
                  name: "",
                  email: "",
                  CPF: "",
                  birthDate: "",
                  phone: "",
                  instagram: "",
                  check: false,
                }}
              >
                {({ errors, touched }) => (
                  <div className={styles.formContact}>
                    <Form>
                      <div className={styles.inputContainer}>
                        <label className={styles.formLabel} htmlFor="name">
                          Nome:
                        </label>
                        {errors.name && touched.name && (
                          <span className={styles.formSpan}>{errors.name}</span>
                        )}
                        <Field
                          type="text"
                          name="name"
                          placeholder="Seu nome completo"
                          className={styles.formField}
                        />
                      </div>
                      <div className={styles.inputContainer}>
                        <label className={styles.formLabel} htmlFor="email">
                          E-mail:
                        </label>
                        {errors.email && touched.email && (
                          <span className={styles.formSpan}>
                            {errors.email}
                          </span>
                        )}
                        <Field
                          type="email"
                          name="email"
                          placeholder="Seu e-mail"
                          className={styles.formField}
                        />
                      </div>
                      <div className={styles.inputContainer}>
                        <label className={styles.formLabel} htmlFor="CPF">
                          CPF:
                        </label>
                        {errors.CPF && touched.CPF && (
                          <span className={styles.formSpan}>{errors.CPF}</span>
                        )}
                        <Field
                          type="text"
                          name="CPF"
                          placeholder="000.000.000-00"
                          className={styles.formField}
                        />
                      </div>
                      <div className={styles.inputContainer}>
                        <label className={styles.formLabel} htmlFor="birthDate">
                          Data de Nascimento:
                        </label>
                        {errors.birthDate && touched.birthDate && (
                          <span className={styles.formSpan}>
                            {errors.birthDate}
                          </span>
                        )}
                        <Field
                          type="text"
                          name="birthDate"
                          placeholder="00.00.0000"
                          className={styles.formField}
                        />
                      </div>
                      <div className={styles.inputContainer}>
                        <label className={styles.formLabel} htmlFor="phone">
                          Telefone:
                        </label>
                        {errors.phone && touched.phone && (
                          <span className={styles.formSpan}>
                            {errors.phone}
                          </span>
                        )}
                        <Field
                          type="tel"
                          name="phone"
                          placeholder="(00) 0000-0000"
                          className={styles.formField}
                        />
                      </div>
                      <div className={styles.inputContainer}>
                        <label
                          className={styles.formLabelInstagram}
                          htmlFor="instagram"
                        >
                          Instagram:
                        </label>
                        <Field
                          type="text"
                          name="instagram"
                          placeholder="@seuuser"
                          className={styles.formField}
                        />
                      </div>
                      <div className={styles.formConfirm}>
                        <span>*</span>
                        <label htmlFor="check">Declaro que li e aceito</label>
                        <Field
                          type="checkbox"
                          name="check"
                          className={styles.confirmField}
                        />
                      </div>
                      <button className={styles.buttonConfirm}>
                        CADASTRE-SE
                      </button>
                      {hasSubmited && (
                        <span className={styles.spanConfirm}>
                          *Formulário enviado com sucesso!
                        </span>
                      )}
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </>
        )}
      </div>
    </>
  );
}
