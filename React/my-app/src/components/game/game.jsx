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
    render() {
      return (
        <GameWrap>
            <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
        </GameWrap>
        
      );
    }
  }
  