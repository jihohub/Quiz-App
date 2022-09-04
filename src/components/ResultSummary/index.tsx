import React from "react";
import Styled from "./index.styles";

interface ResultProps {
  text: string;
};

const ResultSummary: React.FC<ResultProps> = ({ text }) => {
  return (
    <Styled.Wrapper role="comment">
      <Styled.ResultText>{text}</Styled.ResultText>
    </Styled.Wrapper>
  );
};

export default ResultSummary;
