import React, { Component } from "react";
import "./WordDisplay.css";
class WordDisplay extends Component {
  render() {
    const { guess, currentWord } = this.props;
    let display = [];
    let wordFrequency = this.calculateFrequency(currentWord);

    for (let i = 0; i < guess.length; i++) {
      let className;
      if (currentWord[i] === guess[i]) {
        className = "correct";
        wordFrequency[guess[i]]--;
      } else if (
        currentWord.includes(guess[i]) &&
        wordFrequency[guess[i]] > 0
      ) {
        className = "misplaced";
        wordFrequency[guess[i]]--;
      } else {
        className = "incorrect";
      }
      display.push(
        <span key={i} className={className}>
          {guess[i]}
        </span>
      );
    }

    return <div>{display}</div>;
  }

  calculateFrequency(word) {
    let frequency = {};
    for (let letter of word) {
      if (frequency[letter]) {
        frequency[letter]++;
      } else {
        frequency[letter] = 1;
      }
    }
    return frequency;
  }
}

export default WordDisplay;
