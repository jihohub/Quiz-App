import React from "react";
import Styled from "./index.styles";

interface ProgressProps {
  step: number;
}

const ProgressBar: React.FC<ProgressProps> = ({ step }) => {
  return (
    <Styled.Container>
      <Styled.Progress
        role="progressbar"
        width={((step + 1) / 10) * 100 + "%"}
      />
    </Styled.Container>
  );
};

export default ProgressBar;

