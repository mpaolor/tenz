import "./App.css";

import { newDice, randomFace } from "./utils/diceUtils";

import Confetti from "./components/Confetti";
import type { Die } from "./types";
import DieFace from "./components/DieFace";
import StatsBar from "./components/StatsBar";
import WinBanner from "./components/WinBanner";
import { useState } from "react";

export default function App() {
  const randomDice: Die[] = newDice();
  const [dice, setDice] = useState<Die[]>(randomDice);
  const [rollCount, setRollCount] = useState<number>(0);

  // dice[0] has the same face as all other dice, and every dice is held
  function checkWin(dice: Die[]): boolean {
    const firstFace: number = dice[0].face;
    return (
      dice.every((d) => d.face === firstFace)
    );
  }

  function rollDice(): void {
    if (won) {
      setDice(newDice());
      setRollCount(0);
      return;
    }

    setDice((prev) =>
      prev.map((d) => (d.held ? d : { ...d, face: randomFace() }))
    );
    setRollCount((c) => c + 1);
  }

  function toggleHold(id: number): void {
    if (won) return;
    setDice((prev) =>
      prev.map((d) => (d.id === id ? { ...d, held: !d.held } : d))
    );
  }

  let won: boolean = checkWin(dice);
  const heldCount: number = dice.filter((d) => d.held).length;

  return (
    <div className="app">
      <div className="app__bg-grid" />

      <Confetti win={won} />

      <div className="app__title">
        <h1>TENZ</h1>
        <p>HOLD · MATCH · WIN</p>
      </div>

      <StatsBar rollCount={rollCount} heldCount={heldCount} />

      {won && <WinBanner rollCount={rollCount} />}

      <div className="app__dice-grid">
        {dice.map((d) => (
          <DieFace
            key={d.id}
            face={d.face}
            held={d.held}
            onClick={() => toggleHold(d.id)}
          />
        ))}
      </div>

      <button
        className={`app__roll-btn${won ? " app__roll-btn--won" : ""}`}
        onClick={rollDice}
      >
        {won ? "▶  PLAY AGAIN" : "⚄  ROLL DICE"}
      </button>

      <p className="app__hint">CLICK A DIE TO HOLD · MATCH ALL TEN TO WIN</p>
    </div>
  );
}
