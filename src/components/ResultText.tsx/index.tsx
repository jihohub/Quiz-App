import React from "react";
import Styled from "./index.styles";
import unEscape from "../../utils/unEscape";

interface ResultProps {
  id: number;
  question: string;
  choices: Array<number | string>;
  answer: number | string;
  indexAnswer: number;
  indexChosen: number | null;
};

const ResultText: React.FC<ResultProps> = ({
  choices,
  answer,
  indexAnswer,
  indexChosen,
}) => {
  return (
    <Styled.Wrapper role="comment">
      {indexAnswer === indexChosen ? (
        <Styled.ResultText>
          {unEscape(`정답입니다! 정답은 ${answer}입니다.`)}
        </Styled.ResultText>
      ) : (
        <Styled.ResultText>{unEscape(`아쉽게도 ${
          choices[indexChosen as number]
        }은 답이 아닙니다. 정답은 ${answer}입니다.`)}</Styled.ResultText>
      )}
    </Styled.Wrapper>
  );
};

export default ResultText;
