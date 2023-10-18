import { Button } from "@chakra-ui/react";
// eslint-disable-next-line react/prop-types
const Square = ({ value, onSquareClick }) => {
  return (
    <div onClick={onSquareClick} className="square-btn">
      {value}
    </div>
  );
};

export default Square;
