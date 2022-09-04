import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Styled from "./index.styles";
import Button from "../../components/Button";

const Error = (): JSX.Element => {
  const { pathname } = useLocation();
  console.log(pathname);
  const navigate = useNavigate();
  const onButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Styled.Wrapper>
      <Styled.ErrorCode>{pathname === "/error" ? 503 : 404}</Styled.ErrorCode>
      <Styled.ErrorMessage>
        {pathname === "/error"
          ? `서버와 응답을 할 수 없습니다. 다시 시도해주세요.`
          : `페이지를 찾을 수 없습니다. URL을 확인해주세요.`}
      </Styled.ErrorMessage>
      <Button onClick={onButton} text="홈으로 가기" isDisabled={false} />
    </Styled.Wrapper>
  );
};

export default Error;
