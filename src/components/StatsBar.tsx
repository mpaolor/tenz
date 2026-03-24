import React from "react";
import "./StatsBar.css";

interface StatsBarProps {
  rollCount: number;
  heldCount: number;
}

const StatsBar: React.FC<StatsBarProps> = ({ rollCount, heldCount }) => {
  return (
    <div className="stats-bar">
      <div className="stats-bar__stat">
        <div className="stats-bar__value stats-bar__value--rolls">{rollCount}</div>
        <div className="stats-bar__label">ROLLS</div>
      </div>
      <div className="stats-bar__divider" />
      <div className="stats-bar__stat">
        <div className="stats-bar__value stats-bar__value--held">{heldCount}</div>
        <div className="stats-bar__label">HELD</div>
      </div>
    </div>
  );
};

export default StatsBar;
