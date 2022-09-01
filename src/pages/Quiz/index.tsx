import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import useGetQuizzes from "../../hooks/useGetQuizzes";
import useProcessQuiz from "../../hooks/useProcessQuiz";
import { quizState } from "../../atom/quizState";
import Button from "../../components/Button";
import QuizBox from "../../components/QuizBox";

const Quiz = (): JSX.Element => {
  const navigate = useNavigate();
  const onButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate("/");
  };

  const { status, data, error, isFetching } = useGetQuizzes();
  
  return (
    <div className="App">
      {data?.results.map((item) => (
        <QuizBox
          key={item.correct_answer}
          {...item}
        />
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
