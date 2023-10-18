import { useState } from "react";

import calculateWinner from "../utils/calculateWinner";
import isGameTie from "../utils/isGameTie";
import isGameStarted from "../utils/isGameStarted";
const useSquares = () => {
  const [squares, setSquares] = useState(
    () => JSON.parse(localStorage.getItem("squares")) || Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState(true);
  // Event handlers : to handle each button click
  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const nextSquares = squares.slice();
    const currentValue = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    nextSquares[index] = currentValue;
    setSquares(nextSquares);
    localStorage.setItem("squares", JSON.stringify([...nextSquares]));
  };

  //Event handler : to reset the squares
  const handleSquaresReset = () => {
    window.location.reload(true);
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    localStorage.removeItem("squares");
  };

  const Winner = calculateWinner(squares);

  let status = Winner
    ? `Winner: ${Winner}`
    : isGameTie(squares)
    ? `Match is Tie`
    : isGameStarted(squares)
    ? "Start The Game"
    : `Next Player is ${xIsNext ? "X" : "O"}`;

  return [squares, handleClick, handleSquaresReset, status, Winner];
};

export default useSquares;
