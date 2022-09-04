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
  const result = `${quiz.length}문제 중 정답은 ${score}개, 오답은 ${quiz.length - score}개입니다.`;

  return result;
};

export default checkScore;
