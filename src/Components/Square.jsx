import { Button } from "@chakra-ui/react";
// eslint-disable-next-line react/prop-types
const Square = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className="square-btn">
      {value}
    </button>
  );
};

export default Square;
