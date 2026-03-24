import React from "react";
import "./WinBanner.css";

interface WinBannerProps {
  rollCount: number;
}

const WinBanner: React.FC<WinBannerProps> = ({ rollCount }) => {
  return (
    <div className="win-banner">
      <div className="win-banner__title">🎲 YOU WIN!</div>
      <div className="win-banner__subtitle">
        {rollCount} ROLL{rollCount !== 1 ? "S" : ""}
      </div>
    </div>
  );
};

export default WinBanner;
