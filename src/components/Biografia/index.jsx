import styles from "./styles.module.css";

export default function Biografia() {
  return (
    <section className={styles.containerBiografia} id="biografia">
      <p>
        <b>Marco Madureira</b> é um líder político atuante, com uma carreira
        marcada por seu compromisso com o desenvolvimento social e econômico do
        país. Nascido e criado em Madureira, Marco formou-se em Direito pela
        UFRJ, onde começou a se destacar por sua dedicação às causas sociais e
        pela busca incansável por justiça e igualdade.
      </p>
      <p>
        Ao longo de sua trajetória, Marco construiu uma sólida carreira no setor
        público, ocupando cargos de relevância tanto no legislativo quanto no
        executivo. Ele se destacou pela defesa de políticas públicas voltadas à
        educação, saúde e segurança, sempre com foco na inclusão social e no
        desenvolvimento sustentável.
      </p>
      <div className={styles.containerFeitos}>
        <div className={styles.feito}>
          <div className={styles.marcador}>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>
            Liderou a aprovação de uma reforma educacional que aumentou o acesso
            à educação básica de qualidade, com foco na inclusão de alunos de
            baixa renda e na expansão de programas de educação técnica e
            profissionalizante.
          </p>
        </div>
        <div className={styles.feito}>
          <div className={styles.marcador}>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>
            Criou o Programa de Saúde Preventiva, que levou serviços médicos
            essenciais e campanhas de conscientização para áreas remotas e
            comunidades carentes, reduzindo significativamente os índices de
            doenças evitáveis.
          </p>
        </div>
        <div className={styles.feito}>
          <div className={styles.marcador}>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>
            Foi relator de um importante projeto de lei de combate à corrupção,
            que reforçou a transparência nas contas públicas e aprimorou os
            mecanismos de fiscalização, tornando o processo de licitações mais
            seguro e eficiente.
          </p>
        </div>
        <div className={styles.feito}>
          <div className={styles.marcador}>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>
            Encabeçou uma iniciativa pioneira de sustentabilidade energética,
            promovendo incentivos fiscais para empresas que adotam energias
            renováveis e reduzindo a dependência do país de combustíveis
            fósseis.
          </p>
        </div>
      </div>
    </section>
  );
}
