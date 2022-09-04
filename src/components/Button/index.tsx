import React from "react";
import Styled from "./index.styles";

interface ButtonProps {
  text: number | string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, isDisabled }) => (
  <Styled.Button role="button" onClick={onClick} disabled={isDisabled}>
    <Styled.ButtonText>{text}</Styled.ButtonText>
  </Styled.Button>
);

export default Button;
