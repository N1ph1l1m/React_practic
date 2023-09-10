import React from "react";
import Board from "./broad";
import styled from "styled-components";
import "./style.css"


const GameWrap = styled.div`
margin:0px auto;
width:400px;
height:400px;
border:1px solid red;
display:flex;
justify-content:center;
`;


  
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history:[{
        squares: Array(9).fill(null),
      }],
      xIsNext:true,
    }
    
  }
  handleClick(i){
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }
    render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = calculateWinner(current.squares);
      let status;
      if (winner) {
        status = "Winner" + winner;
      } else {
        status = "Next step" + (this.state.xIsNext ? "X" : "O");
      }
      
      return (
        <GameWrap>
            <div className="game">
          <div className="game-board">
            <Board
            squares={current.squares}
            onClick={(i)=>this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
        </GameWrap>
        
      );
    }
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  
  
