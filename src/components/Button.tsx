import React from "react";
import Styled from "./Button.styles";

interface ButtonProps {
  text: number | string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <Styled.Button onClick={onClick}>
    <Styled.ButtonText>{text}</Styled.ButtonText>
  </Styled.Button>
);

export default Button;
