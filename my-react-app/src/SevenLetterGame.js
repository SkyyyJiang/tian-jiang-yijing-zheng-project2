import React, { Component } from "react";
import WordInput from "./WordInput";
import WordDisplay from "./WordDisplay";

class SevenLetterGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: "",
      difficulty: "hard",
      attemptsLeft: 5,
      guesses: [],
      gameOver: false,
      gameWon: false,
      message: "",
    };
  }
  componentDidMount() {
    this.startNewGame();
  }

  getRandomWord = (difficulty) => {
    const words = {
      hard: [
        "concert",
        "concern",
        "driving",
        "ability",
        "evening",
        "morning",
        "exactly",
        "bedroom",
        "ceiling",
        "benefit",
      ],
    };
    const wordsByDifficulty = words[difficulty];
    if (!wordsByDifficulty || wordsByDifficulty.length === 0) {
      console.error(`No words found for difficulty: ${difficulty}`);
      return "";
    }
    const randomIndex = Math.floor(Math.random() * wordsByDifficulty.length);
    return wordsByDifficulty[randomIndex];
  };

  startNewGame = () => {
    const newWord = this.getRandomWord(this.state.difficulty);
    this.setState({
      currentWord: newWord,
      attemptsLeft: 5,
      guesses: [],
      gameOver: false,
      gameWon: false,
      message: "",
    });
  };
  handleGuess = (guess) => {
    if (guess.length !== this.state.currentWord.length) {
      this.setState({ message: "Please enter a 7-letter word." });
      return;
    }

    this.setState(
      (prevState) => ({
        guesses: [...prevState.guesses, guess],
        attemptsLeft: prevState.attemptsLeft - 1,
        message: "",
      }),
      this.checkGameState
    );
  };

  checkGameState = () => {
    const { currentWord, guesses, attemptsLeft } = this.state;
    const lastGuess = guesses[guesses.length - 1];

    if (lastGuess === currentWord) {
      this.setState({
        gameWon: true,
        gameOver: true,
        message: 'Congratulations! You guessed the word "Exactly"!',
      });
    } else if (attemptsLeft <= 0) {
      this.setState({
        gameOver: true,
        message: `Game Over. The word was "Exactly".`,
      });
    }
  };

  render() {
    const { guesses, attemptsLeft, gameOver, message } = this.state;
    return (
      <div>
        {message && <div className="message">{message}</div>}
        {!gameOver && (
          <div>
            <WordInput
              onGuess={this.handleGuess}
              wordLength={this.state.currentWord.length}
            />
            <div>Attempts Left: {attemptsLeft}</div>
          </div>
        )}
        {guesses.map((guess, index) => (
          <WordDisplay
            key={index}
            guess={guess}
            currentWord={this.state.currentWord}
          />
        ))}
      </div>
    );
  }
}

export default SevenLetterGame;
