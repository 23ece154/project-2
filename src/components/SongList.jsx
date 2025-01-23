
import React from "react";
import { useNavigate } from "react-router-dom";


const SongList = ({ songs }) => {
  const navigate = useNavigate();

  const handleSongClick = (song) => {
    navigate(`/song/${song.id}`, { state: { song } });
  };

  return (
    <div className="song-list-container">
      <h2>Available Songs</h2>
      {songs.map((song) => (
        <button
          key={song.id}
          onClick={() => handleSongClick(song)}
          className="song-button"
        >
          {song.title}
        </button>
      ))}
    </div>
  );
};

export default SongList;


