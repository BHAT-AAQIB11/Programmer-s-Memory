import clsx from "clsx";
import { useState, useEffect } from "react";

export default function Card({
  name,
  src,
  visible,
  click,
  matched,
  gamePause,
  pauseGame,
  cardSelected,
  gameWon,
}) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick(e) {
    pauseGame(true);
    setIsSelected(true);
    click(e.target.name);
  }

  useEffect(() => {
    let aa;
    let bba;
    if (!matched) {
      aa = setTimeout(() => {
        setIsSelected(false);
      }, 1000);
    }
    if (cardSelected) {
      bba = setTimeout(() => {
        pauseGame(false);
      }, 500);
    } else {
      bba = setTimeout(() => {
        pauseGame(false);
      }, 1500);
    }

    return () => {
      clearTimeout(aa);
      clearTimeout(bba);
    };
  }, [matched, gamePause]);

  return (
    <button
      onClick={handleClick}
      className={clsx("card", {
        visible: isSelected || visible,
      })}
      name={name}
      disabled={visible || isSelected || gamePause || gameWon}
    >
      <div className="card__front face"></div>
      <img src={src} className={`card__back face ${name}`} alt={`${name}`} />
    </button>
  );
}
