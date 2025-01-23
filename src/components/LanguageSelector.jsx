import React from "react";
import "./styles.css";

const LanguageSelector = ({ onSelectLanguage }) => {
  const languages = ["English", "Tamil", "Hindi", "Malayalam"];

  return (
    <div className="language-selector">
      <h1>Select a Language</h1>
      <div className="language-buttons">
        {languages.map((language) => (
          <button
            key={language}
            className="language-button"
            onClick={() => onSelectLanguage(language.toLowerCase())}
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
