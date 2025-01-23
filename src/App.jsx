
// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import songsData from "./songsData"; // Import the song data
// import SongList from "./components/SongList"; // Import the SongList component
// import SongPlayer from "./components/SongPlayer"; // Import the SongPlayer component

// const App = () => {
//   return (
//     <Router>
//       <div>
        
//         <h1>Dynamic Lyrics Sync</h1>

       
//         <div className="language-buttons">
//           <Link to="/english">
//             <button>English</button>
//           </Link>
//           <Link to="/tamil">
//             <button>Tamil</button>
//           </Link>
//           <Link to="/hindi">
//             <button>Hindi</button>
//           </Link>
//           <Link to="/malayalam">
//             <button>Malayalam</button>
//           </Link>
//         </div>

        
//         <Routes>
//   <Route path="/" element={<h2>Please select a language</h2>} />
//   <Route path="/english" element={<SongList songs={songsData.english} />} />
//   <Route path="/tamil" element={<SongList songs={songsData.tamil} />} />
//   <Route path="/hindi" element={<SongList songs={songsData.hindi} />} />
//   <Route path="/malayalam" element={<SongList songs={songsData.malayalam} />} />
//   <Route path="/song/:id" element={<SongPlayer />} />
// </Routes>

//       </div>
//     </Router>
//   );
// };

// export default App;  


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";


const songsData = {
  english: [
    {
      id:1,
      title: "Imagine",
      songFile: "/songs/Imagine - ft. John Lennon.mp3",
      lyricsFile: "/lyrics/imagine.lrc",
    },
    {
      id:2,
      title: "Let It Be",
      songFile: "/songs/beatles-bundles_let-it-be-album-version-let-it-be-single-version.mp3",
      lyricsFile: "/lyrics/let_it_be.lrc",
    },
  ],
  tamil: [
    {
      id:3,
      title: "yelo pullelo",
      songFile: "/songs/song1.mp3",
      lyricsFile: "/lyrics/yelo_pullalo.lrc",
    },
    {
      id:4,
      title: "imaye imaye",
      songFile: "/songs/imaye_imaye.mp3",
      lyricsFile: "/lyrics/imaye_imaye.lrc",
    },
    {
      id:5,
      title: "muthu_mazhaiye",
      songFile: "/songs/muthu_mazhaiye.mp3",
      lyricsFile: "/lyrics/muthu_mazhaiye.lrc",
    },
    {
      id:6,
      title: "minnalai_pidithu",
      songFile: "/songs/minnalai_pidithu.mp3",
      lyricsFile: "/lyrics/minnalai_pidithu.lrc",
    },
  ],
  hindi: [
    {
      id:7,
      title: "Tum Hi Ho",
      songFile: "/songs/128-Tum Hi Ho - Aashiqui 2 128 Kbps.mp3",
      lyricsFile: "/lyrics/tum_hi_ho.lrc",
    },
    // Add more Hindi songs
  ],
  malayalam: [
    {
      id:8,
      title: "mizhi",
      songFile: "/songs/Mizhirandil-Surumayum-Ezhuthi-Saleem-Kodathoor.mp3",
      lyricsFile: "/lyrics/mizhi.lrc",
    },
  ],
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/english"
          element={<SongList songs={songsData.english} />}
        />
        <Route
          path="/tamil"
          element={<SongList songs={songsData.tamil} />}
        />
        <Route
          path="/hindi"
          element={<SongList songs={songsData.hindi} />}
        />
        <Route
          path="/malayalam"
          element={<SongList songs={songsData.malayalam} />}
        />
        <Route path="/song/:id" element={<SongPlayer />} />
      </Routes>
    </Router>
  );
};

export default App;


