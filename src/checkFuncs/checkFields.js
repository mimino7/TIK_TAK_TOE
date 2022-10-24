import { checkDiagonals } from "./checkDiagonals";
import { checkLines } from "./checkLines";
import { transMatrix } from "./transMatrix";

export const checkFields = (matrix) => {
  if (checkDiagonals(matrix)) return checkDiagonals(matrix);
  if (checkLines(matrix)) return checkLines(matrix);
  if (checkLines(transMatrix(matrix)))
    return { redLine: `COLUMN ${checkLines(transMatrix(matrix)).redLine}` };
  return false;
};
