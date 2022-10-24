


export const transMatrix = (matrix) => {
  let newMatrix = [];
  for (let j = 0; j < 3; j++) {
    newMatrix[j] = [];
    for (let i = 0; i < 3; i++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
};
