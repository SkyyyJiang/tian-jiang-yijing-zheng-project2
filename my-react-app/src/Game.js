import React, { Component } from "react";
import WordInput from "./WordInput";
import WordDisplay from "./WordDisplay";
import { Link } from "react-router-dom";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: "",
      difficulty: "normal",
      attemptsLeft: 6,
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
      normal: [
        "puzzle",
        "jungle",
        "guitar",
        "factor",
        "galaxy",
        "habits",
        "hamlet",
        "infect",
        "spread",
        "jokers",
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
      attemptsLeft: 6,
      guesses: [],
      gameOver: false,
      gameWon: false,
      message: "",
    });
  };

  handleGuess = (guess) => {
    if (guess.length !== this.state.currentWord.length) {
      this.setState({ message: "Please enter a word of the correct length." });
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
        message: "Right",
      });
    } else if (attemptsLeft <= 0) {
      this.setState({
        gameOver: true,
        message: `Game Over. The word was ${currentWord}.`,
      });
    }
  };
  resetGame = () => {
    const newWord = this.getRandomWord(this.state.difficulty);
    this.setState({
      currentWord: newWord,
      difficulty: "normal",
      attemptsLeft: 6,
      guesses: [],
      gameOver: false,
      gameWon: false,
      message: "",
    });
  };

  render() {
    const { guesses, attemptsLeft, gameOver, gameWon, message } = this.state;
    return (
      <div className="game-container">
        <button onClick={this.resetGame} className="reset-button">
          Play Again
        </button>
        {message && <div className="message">{message}</div>}
        {!gameOver ? (
          <div>
            <WordInput
              onGuess={this.handleGuess}
              wordLength={this.state.currentWord.length}
            />
            <div>Attempts Left: {attemptsLeft}</div>
          </div>
        ) : (
          <div>
            {gameWon ? (
              <p>Congratulations! You guessed the word!</p>
            ) : (
              <p>Game Over. The word was {this.state.currentWord}.</p>
            )}
          </div>
        )}
        {guesses.map((guess, index) => (
          <WordDisplay
            key={index}
            guess={guess}
            currentWord={this.state.currentWord}
          />
        ))}

        <Link to="/seven-letter-game">
          <button>Play 7-Letter Word Game</button>
        </Link>
      </div>
    );
  }
}

export default Game;
