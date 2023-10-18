import Board from "../src/components/Board/";
import CustomModal from "./components/CustomModal";
import useSquares from "./hooks/useSquares";
function App() {
  const [squares, handleClick, handleSquaresReset, status, Winner] =
    useSquares();
  return (
    <div className="main-container">
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
