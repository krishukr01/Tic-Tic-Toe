import Square from "./Square/";

import { Button } from "@chakra-ui/react";

const Board = ({ squares, handleClick, handleSquaresReset, status }) => {
  return (
    <div>
      <div className="status-container">
        <div>
          <strong>{status}</strong>
        </div>
        <div>
          <Button onClick={handleSquaresReset} className="reset-btn">
            Reset
          </Button>
        </div>
      </div>
      <div className="container">
        {squares.map((item, index) => (
          <Square
            key={index}
            onSquareClick={() => handleClick(index)}
            value={squares[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
