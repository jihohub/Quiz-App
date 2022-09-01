import React, { useState } from "react";
import QuestionBox from "./QuestionBox";
import ChoiceBox from "./ChoiceBox";
import loading from "../assets/loading.gif";
interface QuizProps {
  question: string;
  choices: Array<number | string>;
  answer: number | string;
  indexAnswer: number;
}

const QuizBox = ({ question, choices, answer, indexAnswer }: QuizProps) => {
  return (
    <div>
      <QuestionBox question={question} />
      {choices?.map((choice) => (
        <ChoiceBox key={String(choice)} choice={choice} />
      ))}
      <img src={loading} alt="loading" />
    </div>
  );
};

export default QuizBox;
