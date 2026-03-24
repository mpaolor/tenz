import "./DieFace.css";

import { PIPS } from "../utils/diceUtils";

interface DieFaceProps {
  face: number;
  held: boolean;
  onClick: () => void;
}

export default function DieFace({ face, held, onClick }: DieFaceProps) {
  const pips = PIPS[face];

  return (
    <button
      className={`die${held ? " die--held" : ""}`}
      onClick={onClick}
    >
      {held && <div className="die__overlay" />}
      <svg viewBox="0 0 100 100" width="70" height="70">
        {pips.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={9}
            fill={held ? "#e94560" : "#1a1a2e"}
          />
        ))}
      </svg>
      {held && <div className="die__label">HELD</div>}
    </button>
  );
};