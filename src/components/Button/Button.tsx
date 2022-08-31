import React from "react";
import Styled from "./Button.styles";

interface ButtonProps {
  text: string;
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <Styled.Button onClick={onClick}>
    <p>{text}</p>
  </Styled.Button>
);

export default Button;
