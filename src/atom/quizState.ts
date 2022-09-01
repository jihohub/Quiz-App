import { atom } from "recoil";

interface QuizState {
  question: string;
  choices: Array<number | string>;
  answer: number | string;
  indexAnswer: number;
  indexChosen: number | null;
}

export const quizState = atom<Array<QuizState>>({
  key: "quizState",
  default: [],
});
