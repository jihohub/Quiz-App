import React from "react";
import { useNavigate } from "react-router-dom";
import Styled from "./index.styles";
import Button from "../../components/Button";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const onButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate("/quiz");
  };

  return (
    <Styled.Wrapper>
      <Button onClick={onButton} text="퀴즈 풀기" isDisabled={false} />
    </Styled.Wrapper>
  );
};

export default Home;
