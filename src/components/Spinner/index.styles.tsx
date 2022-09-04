import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid #00c896;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 0 auto;
  animation: ${rotation} 1s linear infinite;
`;

export default { Spinner, Wrapper };
