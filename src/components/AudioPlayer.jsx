// src/components/AudioPlayer.jsx
import React, { useRef, useState, useEffect } from "react";

const AudioPlayer = ({ audioSrc, onTimeUpdate }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        onTimeUpdate(audioRef.current.currentTime);
      }
    };
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [onTimeUpdate]);

  return (
    <div>
      <audio ref={audioRef} src={audioSrc} />
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default AudioPlayer;
