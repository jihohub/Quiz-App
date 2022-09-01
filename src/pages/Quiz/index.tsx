import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { getQuiz, clearQuiz } from "../../slices/quizSlice";
import styled from "styled-components";
import Button from "../../components/Button";
import QuizBox from "../../components/QuizBox";

const Quiz = (): JSX.Element => {
  const navigate = useNavigate();
  const onButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate("/");
  };

  const quiz = useSelector((state: RootState) => state.quiz.quiz);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getQuiz());
    console.log("dispatch quiz", quiz);
    return () => {
      dispatch(clearQuiz());
    };
  }, []);

  return (
    <div className="App">
      {quiz && quiz?.map((item: any) => (
        <QuizBox key={item.answer} {...item} />
      ))}
      <Button onClick={onButton} text="홈화면으로 돌아가기" />
    </div>
  );
};

// const Button = styled.button`
//   position: absolute;
//   left: 60px;
//   top: 400px;
//   width: 300px;
//   height: 150px;
//   line-height: 30px;
//   color: #ffffff;
//   background-color: #00b8ff;
//   border-radius: 6px;
//   border: 1px;
//   p {
//     font-size: 1.5em;
//   }
// &:hover {
//   color: #ffffff;
//   background-color: #646f7c;
//   cursor: pointer;
// }
// `;

export default Quiz;
