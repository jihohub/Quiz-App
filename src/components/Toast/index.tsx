import React, { useEffect } from "react";

import Styled from "./index.styles";

interface ToastProps {
  isActive: boolean;
  setIsActive: (elem: boolean) => void;
}

const Toast: React.FC<ToastProps> = ({ isActive, setIsActive }) => {
  useEffect(() => {
    if (isActive)
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
  });
  return (
    <Styled.Wrapper>
      {isActive ? (
        <Styled.Toast role="tab" show={true}>
          <Styled.ToastText>{"다시 한 번 생각해보세요."}</Styled.ToastText>
        </Styled.Toast>
      ) : (
        <Styled.Toast show={false} />
      )}
    </Styled.Wrapper>
  );
};

export default Toast;
