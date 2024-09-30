import "./styles.css";
import Header from "./components/Header";
import Biografia from "./components/Biografia";
import Propostas from "./components/Propostas";
import Agenda from "./components/Agenda";
import Footer from "./components/Footer";

import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function App() {
  return (
    <div className="App">
      <Header />
      <picture>
        <source
          media="(min-width:768px)"
          srcSet="https://files.fm/thumb_show.php?i=x5hc2ubn6t"
        />
        <img
          src="https://files.fm/thumb_show.php?i=en3wmzxq7x"
          alt="banner Marco Madureira vote 15"
        />
      </picture>
      <Biografia />
      <Propostas />
      <Agenda />
      <Footer />
      <Fab
        aria-label="add"
        className="btnGoToTop"
        onClick={() => document.querySelector("#header").scrollIntoView()}
      >
        <ArrowUpwardIcon />
      </Fab>
    </div>
  );
}
