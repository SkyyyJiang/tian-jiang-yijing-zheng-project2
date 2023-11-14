import React, { Component } from "react";
import './WordInput.css'

class WordInput extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onGuess(this.state.input);
    this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-container">
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type="submit" className="button button-small">Guess</button>
      </form>
    );
  }
}

export default WordInput;
