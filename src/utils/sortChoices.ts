export const sortChoices = (
  incorrectAnswers: Array<number | string>,
  correctAnswer: number | string
): [Array<number | string>, number] => {
  const choices = incorrectAnswers.filter(() => true);
  const sorter = (a: number | string, b: number | string): any => {
    if (typeof a === "number" && typeof b === "string") {
      return -1;
    }
    if (typeof a === "string" && typeof b === "number") {
      return 1;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.charCodeAt(0) - b.charCodeAt(0);
    }
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    }
  };
  choices.push(correctAnswer);
  choices.sort(sorter);
  const index = choices.indexOf(correctAnswer);
  return [choices, index];
};

// module.exports = sortChoices;
