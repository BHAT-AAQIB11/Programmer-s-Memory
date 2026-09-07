import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import { languageCards } from "./card.js";

export default function App() {
  const [isRedTurn, setIsRedTurn] = useState(randomTurn);
  const [score, setScore] = useState({
    red: 0,
    blue: 0,
  });
  const [winStatus, setWinStatus] = useState("");
  function randomTurn() {
    const randomNum = Math.random() * 4;
    return randomNum > 2 ? true : false;
  }
  let gameWon =
    score.red > languageCards.length / 2 ||
    score.blue > languageCards.length / 2;
  useEffect(() => {
    if (gameWon) {
      setWinStatus(`${isRedTurn ? "Red" : "Blue"} Won`);
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.backgroundColor = isRedTurn
      ? "hsl(0, 60%, 55%)"
      : "hsl(197, 50%, 50%)";
  }, [isRedTurn, gameWon]);
  return (
    <main className="main">
      <h1 className="main__h1">Programmer's Memory</h1>
      <p className="main__p">
        ​Flip, recall, and match identical programming languages. See who can
        discover and collect the most pairs!
      </p>
      <div className="main__scoreContainer">
        <div
          style={{ outline: isRedTurn && `4px solid white` }}
          className="red score"
        >
          {score.red}
        </div>
        <div
          style={{ outline: !isRedTurn && `4px solid white` }}
          className="blue score"
        >
          {score.blue}
        </div>
      </div>
      {gameWon && (
        <div
          style={{
            backgroundColor: isRedTurn
              ? "rgb(255, 44, 44)"
              : "rgb(0, 183, 255)",
          }}
          className="main__winStatus"
        >
          {winStatus}
        </div>
      )}
      <div className="main__gameContainer">
        <Cards
          gameWon={gameWon}
          turn={isRedTurn}
          setTurn={setIsRedTurn}
          addScore={setScore}
        />
      </div>
    </main>
  );
}
