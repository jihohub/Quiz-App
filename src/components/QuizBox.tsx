import React, { useState } from "react";
import QuestionBox from "./QuestionBox";
import ChoiceBox from "./ChoiceBox";
interface QuizProps {
  question: string;
  choices: Array<number | string>;
  answer: number | string;
  indexAnswer: number;
}

const QuizBox = ({ question, choices, answer, indexAnswer }: QuizProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div>
      <QuestionBox question={question} />
      {choices?.map((choice) => (
        <ChoiceBox key={String(choice)} choice={choice} />
      ))}
      <p>{answer}</p>
    </div>
  );
};

export default QuizBox;
// module.exports = QuizBox;
