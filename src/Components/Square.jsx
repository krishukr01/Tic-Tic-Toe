const Square = ({ value, onSquareClick }) => {
  return (
    <div onClick={onSquareClick} className="square-btn">
      {value}
    </div>
  );
};

export default Square;
