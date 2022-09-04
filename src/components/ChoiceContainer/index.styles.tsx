import styled, { css } from "styled-components";

interface ChoiceProps {
  page: string;
  isSelected?: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
  isNothing?: boolean;
}

const ChoiceContainer = styled.div<ChoiceProps>`
  border: 1px solid #c6f6d5;
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
    (props.page === "quiz" &&
    props.isSelected &&
    props.isCorrect) &&
    css`
      background-color: #c6f6d5;
      border: 1px solid #00c896;
      &:hover {
        background-color: #c6f6d5;
        cursor: pointer;
        -webkit-transform: translateY(-0.2rem);
        transform: translateY(-0.2rem);
      }
    `}

  ${(props) =>
    (props.page === "quiz" &&
    props.isSelected &&
    !props.isCorrect) &&
    css`
      background-color: #fc8383;
      border: 1px solid #fc8383;
      &:hover {
        background-color: #fc8383;
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
      border: 1px solid #00c896;
      &:hover {
        background-color: #c6f6d5;
        cursor: pointer;
        -webkit-transform: translateY(-0.2rem);
        transform: translateY(-0.2rem);
      }
    `}

  ${(props) =>
    props.page === "result" &&
    props.isCorrect &&
    css`
      background-color: #c6f6d5;
      border: 1px solid #00c896;
    `}

  ${(props) =>
    props.page === "result" &&
    props.isWrong &&
    css`
      background-color: #feb4b4;
      border: 1px solid #fc8383;
    `}

  ${(props) =>
    props.page === "result" &&
    props.isNothing &&
    css`
      background-color: transparent;
      border: 1px solid #00c896;
    `}
`;

const ChoiceText = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default { ChoiceContainer, ChoiceText };
