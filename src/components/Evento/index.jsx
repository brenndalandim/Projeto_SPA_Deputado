import styles from "./styles.module.css";

export default function Evento({ data, horarioInicio, horarioTermino, local }) {
  return (
    <div className={styles.caixaEvento}>
      <div className={styles.evento}>
        <p className={styles.data}>{data}</p>
        <hr />
        <div className={styles.detalhes}>
          <div className={styles.horarios}>
            <p className={styles.horarioInicio}>{horarioInicio}</p>
            <p className={styles.horarioTermino}>{horarioTermino}</p>
          </div>
          <p className={styles.local}>{local}</p>
        </div>
      </div>
    </div>
  );
}
