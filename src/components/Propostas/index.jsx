import Card from "../Card";
import styles from "./styles.module.css";

export default function Propostas() {
  let propostas = [
    {
      img: "https://files.fm/thumb_show.php?i=47esyvhv5b",
      titulo: "Cidade Segura",
      descricao:
        "Implementação de um plano integrado de segurança pública, com maior investimento em tecnologia, policiamento comunitário e programas de prevenção à violência nas áreas mais vulneráveis da cidade.",
    },
    {
      img: "https://files.fm/thumb_show.php?i=5emuak7vad",
      titulo: "Educação de Qualidade para Todos",
      descricao:
        "Expansão da rede de ensino municipal, com foco na formação de professores, modernização das escolas e criação de programas que preparem os jovens para o mercado de trabalho, especialmente nas áreas de tecnologia e inovação.",
    },
    {
      img: "https://files.fm/thumb_show.php?i=ctgbnghv3w",
      titulo: "Mobilidade Urbana Inteligente",
      descricao:
        "Reestruturação do sistema de transporte público com a introdução de soluções inteligentes, como veículos sustentáveis e integração entre diferentes modais, além da melhoria da infraestrutura para ciclistas e pedestres.",
    },
    {
      img: "https://files.fm/thumb_show.php?i=6ycjbh8cyr",
      titulo: "Saúde para o Futuro",
      descricao:
        "Fortalecimento do atendimento básico de saúde com a criação de centros de atendimento 24h em todas as regiões da cidade, além de programas de telemedicina para ampliar o acesso a especialistas e agilizar diagnósticos.",
    },
    {
      img: "https://files.fm/thumb_show.php?i=ru7berue9m",
      titulo: "Sustentabilidade e Verde Urbano",
      descricao:
        "Desenvolvimento de um plano abrangente para transformar áreas urbanas em espaços sustentáveis, com a criação de parques, jardins verticais e hortas comunitárias.",
    },
  ];
  return (
    <section className={styles.sectionPropostas} id="propostas">
      <h2>Compromisso com o Futuro do Rio</h2>
      <div className={styles.containerPropostas}>
        {propostas.map((proposta, index) => (
          <Card
            key={index}
            imgSrc={proposta.img}
            titulo={proposta.titulo}
            descricao={proposta.descricao}
          />
        ))}
        <ul className={styles.listaPropostas}>
          <li>Habitação Digna e Acessível</li>
          <li>Valorização da Cultura e do Turismo</li>
          <li>Empreendedorismo e Geração de Empregos</li>
          <li>Saneamento Básico para Todos</li>
          <li>Cidadania Digital e Inclusão Tecnológica</li>
        </ul>
      </div>
    </section>
  );
}
