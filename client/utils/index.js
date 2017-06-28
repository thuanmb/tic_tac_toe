const doSum = (sum, n, size) => {
  if (n > -1) {
    if (sum === -1) {
      return n;
    }

    return sum + n;
  }

  return sum - size;
};

const sumRow = (matrix, rowIndex) => {
  const row = matrix[rowIndex];
  if (row) {
    if (row.some((n) => n < 0)) {
      return -1;
    }

    return row.reduce((sum, n) => sum + n, 0);
  }

  return -1;
};

const sumColumn = (matrix, colIndex, size) => {
  let sum = -1;
  let n;
  for (let index = 0; index < size; index += 1) {
    n = matrix[index][colIndex];
    sum = doSum(sum, n, size);
  }

  return sum;
};

const sumLeftDiagonal = (matrix, size) => {
  let sum = -1;
  let n;
  for (let index = 0; index < size; index += 1) {
    n = matrix[index][index];
    sum = doSum(sum, n, size);
  }

  return sum;
};

const sumRightDiagonal = (matrix, size) => {
  let sum = -1;
  let n;
  for (let index = size - 1; index >= 0; index -= 1) {
    n = matrix[size - index - 1][index];
    sum = doSum(sum, n, size);
  }

  return sum;
};


export const createMatrix = (size, defaultVal) => (new Array(size)).fill().map(() => (new Array(size)).fill(defaultVal));

export const checkGameFinished = (gameState, payload) => {
  const { rowIndex, colIndex } = payload;
  const { size, boardMatrix, checkedCount } = gameState;

  const sumInRow = sumRow(boardMatrix, rowIndex);
  const sumInCol = sumColumn(boardMatrix, colIndex, size);

  let sumInLeftDiagonal = -1;
  if (rowIndex === colIndex) {
    sumInLeftDiagonal = sumLeftDiagonal(boardMatrix, size);
  }

  let sumInRightDiagonal = -1;
  if (rowIndex === size - colIndex - 1) {
    sumInRightDiagonal = sumRightDiagonal(boardMatrix, size);
  }

  const finished = (sumInRow === 0 || sumInRow === size ||
    sumInCol === 0 || sumInCol === size ||
    sumInLeftDiagonal === 0 || sumInLeftDiagonal === size ||
    sumInRightDiagonal === 0 || sumInRightDiagonal === size ||
    checkedCount === size * size
  );

  let winner = -1;
  if (finished) {
    if (sumInRow === 0 || sumInCol === 0 || sumInLeftDiagonal === 0 || sumInRightDiagonal === 0) {
      winner = 0;
    } else if (sumInRow === size || sumInCol === size || sumInLeftDiagonal === size || sumInRightDiagonal === size) {
      winner = 1;
    }
  }

  return {
    ...gameState,
    finished,
    winner,
  };
};
