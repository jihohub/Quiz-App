const sortChoices = (
  incorrectAnswers: Array<number | string>,
  correctAnswer: number | string
): [Array<number | string>, number] => {
  // 오답 3개가 들어있는 Array와 정답 1개를 인자로 받아
  // 보기 4개로 이루어진 Array와 정답의 index를 return해주는 유틸함수
  // 오답 3개 Array를 깊은 복사 후, 정답을 push하고
  // 오름차순으로 정렬하고 정답의 index와 함께 return 해준다.
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

export default sortChoices;
