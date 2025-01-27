

import React from "react";
import { useNavigate } from "react-router-dom";

const SongList = ({ songs }) => {
  const navigate = useNavigate();

  const handleSongClick = (song) => {
    navigate(`/song/${song.id}`, { state: { song } });
  };

  return (
    <div>
      <h2>Song List</h2>
      {songs.map((song) => (
        <button key={song.id} onClick={() => handleSongClick(song)}>
          {song.title}
        </button>
      ))}
    </div>
  );
};

export default SongList;
