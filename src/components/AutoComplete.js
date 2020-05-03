import React, { useState, useRef } from "react";
import "./AutoComplete.css";

const AutoComplete = ({ suggestions, setInputSubject }) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const inputRef = useRef();

  const onChange = (e) => {
    const userInput = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    const singleFilteredSuggestion = Array.from(
      new Set(newFilteredSuggestions)
    );

    setInputSubject(userInput);
    setActiveSuggestion(0);
    setFilteredSuggestions(singleFilteredSuggestion);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const onClick = (e) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
    inputRef.current.focus();
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return null;
      }
      setActiveSuggestion((ref) => ref - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return null;
      }
      setActiveSuggestion((ref) => ref + 1);
    }
  };

  let suggestionsListComponent;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              className = "suggestion-active";
            }

            return (
              <li className={className} key={index} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>데이터가 없습니다.</em>
        </div>
      );
    }
  }

  return (
    <div className="subject-search-wrapper">
      <input
        type="text"
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        value={userInput}
        ref={inputRef}
      />
      {suggestionsListComponent}
      {/* <button>과목 검색</button> */}
    </div>
  );
};

export default AutoComplete;
