

export const checkLines = (matrix) => {
  for (let j = 0; j < 3; j++) {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      sum = sum + matrix[j][i];
      if (sum === 3 || sum === -3) {
        return {redLine: `row${j}`};
      }
    }
  }
  return false;
};