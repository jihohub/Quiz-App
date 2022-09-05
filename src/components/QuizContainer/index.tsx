import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { clearStep, nextStep } from "../../slices/stepSlice";
import { setFinish } from "../../slices/timeSlice";
import { setChosen, getScore } from "../../slices/quizSlice";
import Styled from "./index.styles";
import QuestionContainer from "../QuestionContainer";
import ChoiceContainer from "../ChoiceContainer";
import Button from "../Button";
import unEscape from "../../utils/unEscape";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface QuizProps {
  id: number;
  question: string;
  choices: Array<number | string>;
  answer: number | string;
  indexAnswer: number;
}

const QuizContainer = ({ id, question, choices, answer, indexAnswer }: QuizProps) => {
  const navigate = useNavigate();
  // 사지선다 보기 중에 유저가 선택한 보기의 css를 활성화하기 위한 Array
  // 기본값은 모두 false이며 유저가 보기를 선택했을 때 해당 인덱스의 element를 true로 변경
  const [selected, setSelected] = useState<Array<boolean>>(
    Array(choices.length).fill(false)
  );
  const dispatch = useDispatch<AppDispatch>();
  const step = useSelector((state: RootState) => state.step.step);

  // 유저가 보기를 선택했을 때, false로만 채워진 Array를 새로 만들고
  // 해당 보기의 index와 일치하는 element를 true로 변경
  const onPress = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ): void => {
    event.preventDefault();
    const newArr = Array(choices.length).fill(false);
    newArr[index] = true;
    setSelected(newArr);
  };

  // 유저가 다음 문항으로 이동할 시에 실행되는 onClick 이벤트
  // 유저가 방금 풀었던 문제에서 선택한 보기를 quiz 전역상태에 업데이트하고
  // 화면에 렌더링할 문항을 결정하는 step 전역상태를 업데이트함
  const onNext = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    dispatch(setChosen([step, selected.indexOf(true)]));

    if (step < 9) {
      dispatch(nextStep());
    }
  };

  // 유저가 모든 문제를 풀고 결과 보기 페이지로 갈 때
  // 마지막 문제에서 선택한 답안 업데이트
  // 유저가 문제풀이를 종료한 순간의 시각 업데이트
  // 정답 리스트와 유저가 선택한 보기를 비교하여 점수 계산
  const onFinish = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    dispatch(setChosen([step, selected.indexOf(true)]));
    dispatch(setFinish());
    dispatch(getScore());
    dispatch(clearStep());
    navigate("/result");
  };

  // 유저가 문제에서 보기를 선택해야 다음 항목, 결과 보기 버튼을 활성화
  // 오답을 선택했을 시 "다시 한 번 생각해보세요" 토스트를 띄워 정답 선택 유도
  const [disabled, setDisabled] = useState<boolean>(true);
  const notify = () =>
    toast("다시 한 번 생각해보세요", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });

  useEffect(() => {
    setDisabled(!selected.includes(true));
    if (indexAnswer !== selected.indexOf(true) && selected.includes(true)) {
      notify();
    }
  }, [selected]);

  return (
    <Styled.Wrapper>
      <QuestionContainer id={id} question={unEscape(question)} page="quiz" />
      <ToastContainer />
      {choices.map((choice, index) => (
        <ChoiceContainer
          key={String(choice)}
          choice={unEscape(String(choice))}
          onClick={(event) => onPress(event, index)}
          page="quiz"
          isSelected={selected[index]}
          isCorrect={index === indexAnswer}
        />
      ))}
      {step < 9 ? (
        <Button
          onClick={onNext}
          text="다음 문항으로 이동"
          isDisabled={disabled}
        />
      ) : (
        <Button onClick={onFinish} text="결과 보기" isDisabled={disabled} />
      )}
    </Styled.Wrapper>
  );
};

export default QuizContainer;
