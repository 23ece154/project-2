// src/components/LyricsDisplay.jsx
import React from "react";

const LyricsDisplay = ({ lyrics, currentTime }) => {
  const getCurrentLine = () => {
    for (let i = lyrics.length - 1; i >= 0; i--) {
      if (currentTime >= lyrics[i].time) {
        return lyrics[i];
      }
    }
    return lyrics[0];
  };

  const currentLine = getCurrentLine();

  return (
    <div>
      {lyrics.map((lyric, index) => (
        <p key={index} style={{ color: lyric === currentLine ? "red" : "black" }}>
          {lyric.text}
        </p>
      ))}
    </div>
  );
};

export default LyricsDisplay;
