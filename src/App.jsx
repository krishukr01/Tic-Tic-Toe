import Board from "../src/components/Board/";
import CustomModal from "./components/CustomModal";
import useSquares from "./hooks/useSquares";
import Confetti from "react-confetti";

function App() {
  const [squares, handleClick, handleSquaresReset, status, Winner] =
    useSquares();

  return (
    <div className="main-container">
      <Confetti numberOfPieces={200} run={!!Winner} />
      <CustomModal handleSquaresReset={handleSquaresReset} Winner={Winner} />
      <Board
        squares={squares}
        handleClick={handleClick}
        handleSquaresReset={handleSquaresReset}
        status={status}
      />
    </div>
  );
}

export default App;
