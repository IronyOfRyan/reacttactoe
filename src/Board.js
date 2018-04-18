import React, {Component} from 'react';
const {maximize, calculateWinner} = require('./GameAI');

function Square(props) {
  return (
  // adds props on square component to change value when click the square
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>);
}

// EVERYTHING THAT APPEARS IN OR AROUND BOARD
export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: new Array(9).fill(null),
      firstMove: false
    };
  }

  handleClick = (i) => {
    let squares = [...this.state.squares];
    if (squares[i]) {
      return alert("Invalid Space");
    }
    // If game won stop handleClick from working further
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
      // Adds player choice as soon as clicked
      squares[i] = "O";
      this.setState( {squares, firstMove: true} , ()=>{
      });
      // Calls setTimeout on the AI logic function and set state to add realistic delay
    setTimeout(() => {
      const best = maximize(squares);
      squares[best[1]] = "X";
      this.setState( {squares, firstMove: true} , ()=>{
      } );
    }, 1000);
  }

  // Function that resets the board by resetting the state to def vals
  handleReset = () => {
    console.log("RESET HANDLER");
    this.setState({squares: Array(9).fill(null), firstMove: true})
  };

  // Renders the square and inserts the values(o, x's) and adds event listen
  renderSquare = (i) => {
    return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>);
  }

  // render func for rending data to screen
  render() {
    //checks one of the winning combos of moves
    const winner = calculateWinner(this.state.squares);
    let status;
    //if winner is true, print string and winner text from square[i]
    if (winner) {
      status = 'Winner is ' + winner;
      // checks for full board and no winner
    } else if (this.state.squares.indexOf(null) === -1) {
      status = 'Game is a Draw';
      //else continue game to next player
    } else {
      status = 'You are O';
    }

    // returns the JSX
    return (<div className="board">
      <h1 className="gametitle">React Tac Toe</h1>
      <div className="status">{status}
      </div>
      <div className="reset">
        <button onClick={() => this.handleReset()} className="resetButton">RESET</button>
      </div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>);
  }
}
