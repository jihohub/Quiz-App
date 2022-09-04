import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  background-color: #eeeeee;
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
const Progress = styled.div<{ width: string }>`
  margin: 0;
  background-color: ${(props) => props.theme.colors.primary};
  height: 100%;
  width: ${(props) => props.width};
  border-radius: 20px;
  transition: width 1s ease-out;
  animation-fill-mode: forwards;
`;

export default { Container, Progress };
