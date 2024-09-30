import { useState } from "react";
import styles from "./styles.module.css";

export default function Header() {
  const [clickMenuMobile, setClickMenuMobile] = useState(false);
  const [iconMenu, setIconMenu] = useState("bi bi-list");
  const [styleMenuMobile, setStyleMenuMobile] = useState("");

  const handleMobileMenu = () => {
    if (!clickMenuMobile) {
      setClickMenuMobile(true);
      setIconMenu("bi bi-x");
      document.body.style.overflow = "hidden";
    } else {
      setStyleMenuMobile("translateX(-100%)");
      setTimeout(() => {
        setStyleMenuMobile("");
        setClickMenuMobile(false);
        setIconMenu("bi bi-list");
        document.body.style.removeProperty("overflow");
      }, 500);
    }
  };

  const handleClickForaMenuMobile = (click) => {
    let clickOpcaoMenu = click.nodeName === "LI";
    if (
      clickMenuMobile &&
      (!document
        .querySelector(`.${styles.menuOptionsMobile}`)
        .contains(click) ||
        clickOpcaoMenu)
    ) {
      handleMobileMenu();
    }
  };

  return (
    <header id="header">
      <h1 className={styles.nome}>Marco Madureira</h1>
      <i
        className={`${iconMenu} ${styles.menuMobile}`}
        onClick={(e) => handleMobileMenu(e.target)}
      ></i>
      <nav
        className={
          clickMenuMobile === true ? `${styles.containerMenuMobile}` : ""
        }
        onClick={(e) => handleClickForaMenuMobile(e.target)}
      >
        <ul
          className={
            clickMenuMobile === true
              ? `${styles.menuOptionsMobile} ${styles.menuOptions}`
              : `${styles.menuOptionsDesktop} ${styles.menuOptions}`
          }
          style={{ transform: styleMenuMobile }}
        >
          <li
            onClick={() =>
              document.querySelector("#biografia").scrollIntoView()
            }
          >
            Biografia
          </li>
          <li
            onClick={() =>
              document.querySelector("#propostas").scrollIntoView()
            }
          >
            Propostas
          </li>
          <li
            onClick={() => document.querySelector("#agenda").scrollIntoView()}
          >
            Agenda
          </li>
          <li
            onClick={() => document.querySelector("#footer").scrollIntoView()}
          >
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
}
