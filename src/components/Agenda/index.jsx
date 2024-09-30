import Evento from "../Evento";
import styles from "./styles.module.css";

export default function Agenda() {
  let listaEventos = [
    {
      data: "02/10",
      horarioInicio: "13:00",
      horarioTermino: "15:00",
      local: "Rua além do horizonte, 987",
    },
    {
      data: "03/10",
      horarioInicio: "13:00",
      horarioTermino: "15:00",
      local: "Rua além do horizonte, 987",
    },
    {
      data: "04/10",
      horarioInicio: "13:00",
      horarioTermino: "15:00",
      local: "Rua além do horizonte, 987",
    },
    {
      data: "05/10",
      horarioInicio: "13:00",
      horarioTermino: "15:00",
      local: "Rua além do horizonte, 987",
    },
  ];

  return (
    <section className={styles.sectionAgenda} id="agenda">
      <h2>Agenda</h2>
      <div className={styles.containerScrollEventos}>
        <div className={styles.containerEventos}>
          {listaEventos.map((evento, index) => (
            <Evento
              key={index}
              data={evento.data}
              horarioInicio={evento.horarioInicio}
              horarioTermino={evento.horarioTermino}
              local={evento.local}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
