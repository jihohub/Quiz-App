import styled, { css } from "styled-components";

interface ChoiceProps {
  page: string;
  isSelected?: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
  isNothing?: boolean;
}

const ChoiceContainer = styled.div<ChoiceProps>`
  border-radius: 8px;
  height: 5rem;
  line-height: 5rem;
  max-width: 50%;
  margin: 1% auto;
  padding: 0.25em 1em;
  -webkit-transition: width 0.5s, height 0.5s, background-color 0.5s,
    -webkit-transform 0.5s;
  transition: width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }

  ${(props) =>
    props.page === "quiz" &&
    props.isSelected &&
    props.isCorrect &&
    css`
      background-color: ${(props) => props.theme.colors.correct};
      border: 2px solid ${(props) => props.theme.borderColors.correct};
      &:hover {
        background-color: ${(props) => props.theme.colors.correct};
        cursor: pointer;
        -webkit-transform: translateY(-0.2rem);
        transform: translateY(-0.2rem);
      }
    `}

  ${(props) =>
    props.page === "quiz" &&
    props.isSelected &&
    !props.isCorrect &&
    css`
      background-color: ${(props) => props.theme.colors.wrong};
      border: 2px solid ${(props) => props.theme.borderColors.wrong};
      &:hover {
        background-color: ${(props) => props.theme.colors.wrong};
        cursor: pointer;
        -webkit-transform: translateY(-0.2rem);
        transform: translateY(-0.2rem);
      }
    `}

  ${(props) =>
    props.page === "quiz" &&
    !props.isSelected &&
    css`
      background-color: transparent;
      border: 2px solid ${(props) => props.theme.colors.primary};
      &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        cursor: pointer;
        -webkit-transform: translateY(-0.2rem);
        transform: translateY(-0.2rem);
      }
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
    props.isWrong &&
    css`
      background-color: ${(props) => props.theme.colors.wrong};
      border: 2px solid ${(props) => props.theme.borderColors.wrong};
    `}

  ${(props) =>
    props.page === "result" &&
    props.isNothing &&
    css`
      background-color: transparent;
      border: 2px solid ${(props) => props.theme.borderColors.primary};
    `}
`;

const ChoiceText = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default { ChoiceContainer, ChoiceText };
