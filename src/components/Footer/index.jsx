import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer id="footer">
      <p>Marco Madureira - Vote 15</p>
      <div className={styles.contato}>
        <sub>contato@marcomadureira.com.br</sub>
        <sub>+55 (21) 99999-9999</sub>
      </div>
      <div className={styles.redesSociais}>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://bsky.app/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-tiktok"></i>
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-youtube"></i>
        </a>
      </div>
      <p className={styles.copy}>&copy; Brennda Landim</p>
    </footer>
  );
}
