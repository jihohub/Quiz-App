import React, { useState } from "react";
import Styled from "./index.styles";

interface ChoiceProps {
  choice: number | string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  page: string;
  isSelected?: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
  isNothing?: boolean;
}

const ChoiceContainer: React.FC<ChoiceProps> = ({
  choice,
  onClick,
  page,
  isSelected,
  isCorrect,
  isWrong,
  isNothing,
}) => {
  return (
    <Styled.ChoiceContainer
      role="tab"
      onClick={onClick}
      page={page}
      isSelected={isSelected}
      isCorrect={isCorrect}
      isWrong={isWrong}
      isNothing={isNothing}
    >
      <Styled.ChoiceText>{choice}</Styled.ChoiceText>
    </Styled.ChoiceContainer>
  );
};

export default ChoiceContainer;
