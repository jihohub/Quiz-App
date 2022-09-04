import styled, { css } from "styled-components";

interface QuestionProps {
  page: string;
  isCorrect?: boolean;
}

const QuestionContainer = styled.div<QuestionProps>`
  border: 1px solid #00c896;
  border-radius: 8px;
  height: 5rem;
  display: flex;
  max-width: 50%;
  margin: 0 auto;
  margin-bottom: 3%;
  padding: 0.25em 1em;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }

  ${(props) =>
    props.page === "quiz" &&
    css`
      background-color: #c6f6d5;
      border: 1px solid #c6f6d5;
    `}

  ${(props) =>
    props.page === "result" &&
    props.isCorrect &&
    css`
      background-color: #00c896;
      border: 1px solid #00c896;
    `}
  ${(props) =>
    props.page === "result" &&
    !props.isCorrect &&
    css`
      background-color: #fc8383;
      border: 1px solid #fc8383;
    `}
`;

const QuestionText = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default { QuestionContainer, QuestionText };
