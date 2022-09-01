import React, { useEffect, useState } from "react";
import { sortChoices } from "../utils/sortChoices";

type Quizzes = Array<{
  // category: string;
  // type: string;
  // difficulty: string;
  question: string;
  correct_answer: number | string;
  incorrect_answers: Array<number | string>;
}>;

const useProcessQuiz = (quiz: Quizzes): Array<any> => {
  // const [qqq, setQqq] = useState<any>();
  const qq = quiz?.map((item) => ({
    question: item.question,
    choices: sortChoices(item.incorrect_answers, item.correct_answer)[0],
    answer: item.correct_answer,
    indexAnswer: sortChoices(item.incorrect_answers, item.correct_answer)[1],
    indexChosen: null,
  }));
  // setQqq(qq);
  return qq
}

export default useProcessQuiz;
