
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";


const SongPlayer = () => {
  const location = useLocation();
  const song = location.state?.song;

  const audioRef = useRef(null);
  const [lyrics, setLyrics] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!song) return;

    const fetchLyrics = async () => {
      try {
        const response = await fetch(song.lyricsFile);
        const text = await response.text();
        const lines = text
          .split("\n")
          .map((line) => {
            const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2})\](.*)/);
            if (match) {
              const time =
                parseInt(match[1]) * 60 +
                parseInt(match[2]) +
                parseInt(match[3]) / 100;
              return { time, text: match[4].trim() };
            }
            return null;
          })
          .filter(Boolean);
        setLyrics(lines);
      } catch (error) {
        console.error("Error fetching lyrics:", error);
      }
    };

    fetchLyrics();
  }, [song]);

  useEffect(() => {
    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    audioRef.current?.addEventListener("timeupdate", updateTime);
    return () => {
      audioRef.current?.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const getCurrentLyric = () =>
    lyrics.find((lyric, index) => {
      const nextLyric = lyrics[index + 1];
      return (
        currentTime >= lyric.time &&
        (!nextLyric || currentTime < nextLyric.time)
      );
    });

  if (!song) {
    return <h2>No song selected</h2>;
  }

  return (
    <div className="song-player">
      <h2>Now Playing: {song.title}</h2>
      <audio ref={audioRef} src={song.songFile} controls autoPlay />
      <div className="lyrics">
        {lyrics.map((lyric, index) => (
          <p
            key={index}
            className={
              lyric === getCurrentLyric() ? "current-lyric" : "lyric-line"
            }
          >
            {lyric.text}
          </p>
        ))}
        <footer>
  <audio ref={audioRef} src={song.songFile} controls />
</footer>

      </div>
    </div>
    
  );
};

export default SongPlayer;

