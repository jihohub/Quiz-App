import React from "react";
import Button from "./Button";
import { sortChoices } from "../utils/sortChoices";
interface QuizProps {
  question: string;
  choices: Array<number | string>;
  answer: number | string;
  indexAnswer: number;
}


const QuizBox = ({ question, choices, answer, indexAnswer }: QuizProps) => {
  // const [choices, index] = sortChoices(incorrect_answers, correct_answer);

  return (
    <div>
      <p>{question}</p>
      {choices?.map((choice) => (
        <Button key={String(choice)} text={choice} />
      ))}
      <p>{answer}</p>
    </div>
  );
};

export default QuizBox;
