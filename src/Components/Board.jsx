import Square from "../Components/Square";
import useSquares from "../hooks/useSquares";

const Board = () => {
  const [squares, handleClick, handleSquaresReset, status] = useSquares();

  return (
    <div>
      <div className="status-container">
        <div>
          <strong>{status}</strong>
        </div>
        <div>
          <button onClick={handleSquaresReset} className="reset-btn">
            Reset
          </button>
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
