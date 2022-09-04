import React, { useEffect } from "react";
import Styled from "./index.styles";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { setStart } from "../../slices/timeSlice";
import QuizContainer from "../../components/QuizContainer";
import Spinner from "../../components/Spinner";
import useGetQuiz from "../../hooks/useGetQuiz";
import ProgressBar from "../../components/ProgressBar";
import ProgressText from "../../components/ProgressText";

const Quiz = (): JSX.Element => {
  const [quiz, loading, error, step] = useGetQuiz();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setStart());
  }, []);

  return (
    <Styled.Wrapper>
      {loading && <Spinner />}
      {quiz && !loading && (
        <>
          <ProgressBar step={step} />
          <ProgressText step={step} />
        </>
      )}
      {quiz &&
        !loading &&
        quiz
          ?.filter((item: any) => item.id === step)
          .map((item: any) => <QuizContainer key={item.answer} {...item} />)}
    </Styled.Wrapper>
  );
};

export default Quiz;
