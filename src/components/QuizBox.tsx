import React from "react";

interface QuizProps {
  question: string,
  choices: Array<number | string>
}

const QuizBox = ({ question, choices }: QuizProps) => {
  return (
    <div>
      <p>{question}</p>
      {choices.map((choice) => (
        <p key={String(choice)}>{choice}</p>
      ))}
    </div>
  );
}

export default QuizBox;
