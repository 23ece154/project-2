// src/components/ProgressBar.jsx
// import React from "react";

// const ProgressBar = ({ currentTime, duration }) => {
//   const progress = (currentTime / duration) * 100 || 0;

//   return (
//     <div style={{ width: "100%", background: "#ccc", height: "10px" }}>
//       <div
//         style={{
//           width: `${progress}%`,
//           background: "blue",
//           height: "100%",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default ProgressBar;


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
