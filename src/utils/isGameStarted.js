const isGameStarted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
      return false;
    }
  }
  return true;
};

export default isGameStarted;
