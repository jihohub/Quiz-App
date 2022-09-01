import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const onButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate("/quiz");
  };

  return (
    <div className="App">
      <Button onClick={onButton} text="퀴즈 풀러 가기" />
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

// -webkit-transition: width 0.5s, height 0.5s, background-color 0.5s,
//   -webkit-transform 0.5s;
// transition: width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s;
// &:hover {
//   color: #ffffff;
//   background-color: #646f7c;
//   cursor: pointer;
//   -webkit-transform: translateY(-0.5rem);
//   transform: translateY(-0.5rem);
// }
// `;

export default Home;
