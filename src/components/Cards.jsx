import { useState } from "react";
import Card from "./Card";
import { getRandomCards } from "../card.js";

const matches = {
  javascript: "twinjavascript",
  python: "twinpython",
  "c++": "twinc++",
  java: "twinjava",
  react: "twinreact",
  assembly: "twinassembly",
  typescript: "twintypescript",
  nodejs: "twinnodejs",
  twinjavascript: "javascript",
  twinpython: "python",
  "twinc++": "c++",
  twinjava: "java",
  twinreact: "react",
  twinassembly: "assembly",
  twintypescript: "typescript",
  twinnodejs: "nodejs",
  mysql: "twinmysql",
  twinmysql: "mysql",
};

export default function Cards({ setTurn, addScore, turn, gameWon }) {
  const [languageCards, setLanguageCards] = useState(getRandomCards);
  const [cardSelected, setCardSelected] = useState(false);
  const [cardMatched, setCardMatched] = useState(true);
  const [cardName, setCardName] = useState("");
  const [gamePause, setGamePause] = useState(false);

  function handleClick(name) {
    if (!cardSelected) {
      setCardName(name);
      setCardMatched(true);
    } else {
      if (matches[cardName] === name) {
        setLanguageCards((prev) => {
          return prev.map((card) => {
            return card.name === name || card.name === cardName
              ? { ...card, visible: true }
              : card;
          });
        });
        setTimeout(() => {
          addScore((prev) => {
            const isRedTurn = turn;
            return isRedTurn
              ? { ...prev, red: prev.red + 1 }
              : { ...prev, blue: prev.blue + 1 };
          });
        }, 500);
      } else {
        setCardMatched(false);
        setTimeout(() => {
          setTurn((prev) => !prev);
        }, 500);
      }
    }
    setCardSelected((prev) => !prev);
  }

  const cards = languageCards.map(({ id, name, src, visible }) => (
    <Card
      key={id}
      name={name}
      src={src}
      visible={visible}
      click={() => handleClick(name)}
      matched={cardMatched}
      pauseGame={setGamePause}
      gamePause={gamePause}
      cardSelected={cardSelected}
      gameWon={gameWon}
    />
  ));
  return <>{cards}</>;
}
