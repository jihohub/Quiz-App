import styled, { css } from "styled-components";

const Button = styled.button<{ disabled?: boolean }>`
  background: transparent;
  border-radius: 8px;
  height: 5rem;
  line-height: 5rem;
  min-width: 10rem;
  margin: 0 2%;
  -webkit-transition: width 0.5s, height 0.5s, background-color 0.5s,
    -webkit-transform 0.5s;
  transition: width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s;

  @media screen and (max-width: 768px) {
    margin-top: 5%;
  }

  ${(props) =>
    props.disabled
      ? css`
          color: ${(props) => props.theme.colors.disabled};
          border: 1px solid ${(props) => props.theme.borderColors.disabled};
        `
      : css`
          background-color: ${(props) => props.theme.colors.primary};
          border: 1px solid ${(props) => props.theme.borderColors.primary};
          &:hover {
            background-color: ${(props) => props.theme.colors.secondary};
            border: 1px solid ${(props) => props.theme.borderColors.primary};
            cursor: pointer;
            -webkit-transform: translateY(-0.2rem);
            transform: translateY(-0.2rem);
          }
        `}
`;

const ButtonText = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default { Button, ButtonText };
