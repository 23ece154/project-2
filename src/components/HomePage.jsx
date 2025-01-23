import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLanguageClick = (language) => {
    navigate(`/${language}`);
  };

  return (
    <div>
      <h1>Lyrica</h1>
      <div className="language-buttons">
        <button onClick={() => handleLanguageClick("english")}>English</button>
        <button onClick={() => handleLanguageClick("tamil")}>Tamil</button>
        <button onClick={() => handleLanguageClick("hindi")}>Hindi</button>
        <button onClick={() => handleLanguageClick("malayalam")}>Malayalam</button>
      </div>
    </div>
  );
};

export default HomePage;

