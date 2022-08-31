import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";

const Quiz = (): JSX.Element => {
  const navigate = useNavigate();
  const onButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="App">
      <Button onClick={onButton} text="Go to home" />
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
