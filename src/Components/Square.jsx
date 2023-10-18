import { Button } from "@chakra-ui/react";
// eslint-disable-next-line react/prop-types
const Square = ({ value, onSquareClick }) => {
  return (
    <Button
      colorScheme="messenger"
      onClick={onSquareClick}
      className="square-btn"
    >
      {value}
    </Button>
  );
};

export default Square;
