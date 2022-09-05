interface ScoreProps {
  quiz: Array<{
    id: number;
    question: string;
    choices: Array<string | number>;
    answer: string | number;
    indexAnswer: number;
    indexChosen: number | null;
    isCorrect: boolean;
  }>
  score: number;
};

const checkScore = ({ quiz, score }: ScoreProps): string => {
  const result = `${quiz.length}문제 중 ${score}문제를 맞히셨어요! 틀린 ${quiz.length - score}문제는 무엇이 정답이었는지 아래 결과 페이지에서 확인해보아요.`;

  return result;
};

export default checkScore;
