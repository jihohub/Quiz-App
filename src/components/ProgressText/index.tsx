import React from "react";
import Styled from "./index.styles";

interface ProgressProps {
  step: number;
}

const ProgressText: React.FC<ProgressProps> = ({ step }) => {
  return (
    <Styled.Container role="comment">
      <Styled.Progress>{`${step + 1} / 10 문제`}</Styled.Progress>
    </Styled.Container>
  );
};

export default ProgressText;
