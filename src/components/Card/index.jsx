import styles from "./styles.module.css";

export default function Card({ imgSrc, titulo, descricao }) {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="" />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}
