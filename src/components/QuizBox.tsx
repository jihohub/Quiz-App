import React from "react";
import Button from "./Button";
import { sortChoices } from "../utils/sortChoices";
interface QuizProps {
  question: string;
  correct_answer: number | string;
  incorrect_answers: Array<number | string>;
}

const QuizBox = ({ question, correct_answer, incorrect_answers, }: QuizProps) => {
  const [choices, index] = sortChoices(incorrect_answers, correct_answer);

  return (
    <div>
      <p>{question}</p>
      {choices?.map((choice) => (
        <Button key={String(choice)} text={choice} />
      ))}
    </div>
  );
};

export default QuizBox;
