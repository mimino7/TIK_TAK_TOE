

export const checkDiagonals = (matrix) => {
  let sumDiagonal = 0;
  let sumSecondDiagonal = 0;
  for (let j = 0; j < 3; j++) {
    sumSecondDiagonal += matrix[j][3 - 1 - j];
    sumDiagonal += matrix[j][j];
  }
  if (sumDiagonal === 3 || sumDiagonal === -3) return {redLine: 'd1'};
  if (sumSecondDiagonal === 3 || sumSecondDiagonal === -3) return {redLine: 'd2'};
  return false;
};