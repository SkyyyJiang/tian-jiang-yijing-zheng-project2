import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./Game";
import SevenLetterGame from "./SevenLetterGame";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/seven-letter-game" element={<SevenLetterGame />} />
          <Route path="/" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
