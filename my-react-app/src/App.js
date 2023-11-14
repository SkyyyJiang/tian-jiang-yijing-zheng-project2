import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./Game";
import SevenLetterGame from "./SevenLetterGame";
import HomePage from "./HomePage";
import Rule from "./Rule";
import './App.css';
import './common.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/normal" element={<Game />}/>
          <Route path="/game/hard" element={<SevenLetterGame />}/>
          <Route path="/rule" element={<Rule />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
