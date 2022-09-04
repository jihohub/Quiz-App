import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import Styled from "./index.styles";
import useGetDiff from "../../hooks/useGetDiff";
import convertDiff from "../../utils/convertDiff";
import checkScore from "../../utils/checkScore";
import ResultSummary from "../../components/ResultSummary";
import ResultContainer from "../../components/ResultContainer";
import ResultText from "../../components/ResultText.tsx";
import Button from "../../components/Button";

const Result = (): JSX.Element => {
  const quiz = useSelector((state: RootState) => state.quiz.quiz);
  const score = useSelector((state: RootState) => state.quiz.score);
  const [diff] = useGetDiff();

  const navigate = useNavigate();
  const onHome = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate("/");
  };

  const onRetry = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate("/quiz");
  };

  return (
    <Styled.Wrapper>
      <ResultSummary text={convertDiff(diff)} />
      <ResultSummary text={checkScore({ quiz, score })} />
      {quiz.map((item) => (
        <div key={`${item.id} result div`}>
          <ResultContainer key={`${item.id} result container`} {...item} />
          <ResultText key={`${item.id} result text`} {...item} />
        </div>
      ))}
      <Button onClick={onHome} text="홈으로 돌아가기" isDisabled={false} />
      <Button onClick={onRetry} text="다시 풀기" isDisabled={false} />
    </Styled.Wrapper>
  );
};

export default Result;
