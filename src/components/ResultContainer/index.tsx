import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import Styled from "./index.styles";
import QuestionContainer from "../QuestionContainer";
import ChoiceContainer from "../ChoiceContainer";
import unEscape from "../../utils/unEscape";

interface ResultProps {
  id: number;
  question: string;
  choices: Array<number | string>;
  answer: number | string;
  indexAnswer: number;
  indexChosen: number | null;
};

const ResultContainer: React.FC<ResultProps> = ({
  id,
  question,
  choices,
  indexAnswer,
  indexChosen,
}) => {
  return (
    <Styled.Wrapper>
      <QuestionContainer
        id={id}
        question={unEscape(question)}
        page="result"
        isCorrect={indexAnswer === indexChosen}
      />
      {choices.map((choice, index) => (
        <ChoiceContainer
          key={`${index} ${choice} choice container`}
          choice={unEscape(String(choice))}
          page="result"
          isCorrect={indexAnswer === index}
          isWrong={indexChosen === index && indexChosen !== indexAnswer}
          isNothing={indexAnswer !== index && indexChosen !== index}
        />
      ))}
    </Styled.Wrapper>
  );
};

export default ResultContainer;
