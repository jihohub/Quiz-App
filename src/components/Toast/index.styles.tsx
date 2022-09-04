import styled, { keyframes, css } from "styled-components";

const fadein = keyframes`
  0% { top: 45%; opacity: 0; } 
  100% { top: 40%; opacity: 1; }
`;
const fadeout = keyframes`
  0% { top: 40%; opacity: 1; } 
  100% { top: 45%; opacity: 0; }
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 50%;
  margin: 3% auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;

export const Toast = styled.div<{ isCorrect?: boolean | null; show: boolean }>`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 120px;
  line-height: 120px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: #fed7d7;
  color: #000000;
  text-align: center;
  border-radius: 10px;
  // padding: 1rem;
  // padding-left: 1.5rem;
  // padding-right: 1.5rem;
  font-size: 1.5rem;
  -webkit-animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ""};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ""};
  animation-fill-mode: forwards;
`;

const ToastText = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default { Wrapper, Toast, ToastText };
