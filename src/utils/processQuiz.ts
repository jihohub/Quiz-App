import React from "react";
import sortChoices from "./sortChoices";

type beforeProcess = Array<{
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: number | string;
  incorrect_answers: Array<number | string>;
}>;

export type afterProcess = Array<{
  id: number;
  question: string;
  choices: Array<number | string>;
  answer: number | string;
  indexAnswer: number;
  indexChosen: number | null;
  isCorrect: boolean;
}>;

const processQuiz = (quizzes: beforeProcess): afterProcess => {
  // 퀴즈 api에서 받아온 data를 필요에 맞게 처리하는 유틸함수
  const processedQuiz = quizzes.map((item, index) => ({
    id: index,
    question: item.question,
    choices: sortChoices(item.incorrect_answers, item.correct_answer)[0],
    answer: item.correct_answer,
    indexAnswer: sortChoices(item.incorrect_answers, item.correct_answer)[1],
    indexChosen: null,
    isCorrect: false
  }));
  return processedQuiz;
};

export default processQuiz;
