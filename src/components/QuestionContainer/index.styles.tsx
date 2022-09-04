import styled, { css } from "styled-components";

interface QuestionProps {
  page: string;
  isCorrect?: boolean;
}

const QuestionContainer = styled.div<QuestionProps>`
  border: 2px solid ${(props) => props.theme.colors.primary};
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
      background-color: ${(props) => props.theme.colors.primary};
      border: 2px solid ${(props) => props.theme.borderColors.primary};
    `}

  ${(props) =>
    props.page === "result" &&
    props.isCorrect &&
    css`
      background-color: ${(props) => props.theme.colors.correct};
      border: 2px solid ${(props) => props.theme.borderColors.correct};
    `}
  ${(props) =>
    props.page === "result" &&
    !props.isCorrect &&
    css`
      background-color: ${(props) => props.theme.colors.wrong};
      border: 2px solid ${(props) => props.theme.borderColors.wrong};
    `}
`;

const QuestionText = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default { QuestionContainer, QuestionText };
