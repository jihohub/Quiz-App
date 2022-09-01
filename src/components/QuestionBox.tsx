
import React from "react";
import Styled from "./QuestionBox.styles";

interface QuestionProps {
  question: string;
}

const QuestionBox = ({ question }: QuestionProps) => {
  return (
    <Styled.QuestionBox>
      <p>{question}</p>
    </Styled.QuestionBox>
  );
};

export default QuestionBox;
