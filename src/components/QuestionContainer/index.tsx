import React from "react";
import Styled from "./index.styles";

interface QuestionProps {
  id: number;
  question: string;
  page: string;
  isCorrect?: boolean;
}

const QuestionContainer: React.FC<QuestionProps> = ({
  id,
  question,
  page,
  isCorrect
}) => {
  return (
    <Styled.QuestionContainer role="tab" page={page} isCorrect={isCorrect}>
      <Styled.QuestionText>{`${id + 1}. ${question}`}</Styled.QuestionText>
    </Styled.QuestionContainer>
  );
};

export default QuestionContainer;
