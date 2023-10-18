import React from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

const CustomModal = ({ Winner, handleSquaresReset }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (Winner) {
      onOpen();
    }
  }, [Winner]);
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="90%"
          backdropBlur="1px"
        />
        <ModalContent>
          <ModalHeader>
            <Text as="mark">{`Hurray! ${Winner} won the match`}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              onClick={() => {
                onClose();
                handleSquaresReset();
              }}
            >
              Play again
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
