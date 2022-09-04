import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 10%;
  padding-top: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorCode = styled.p`
  font-size: 5rem;
`;

const ErrorMessage = styled.p`
  font-size: 2rem;
`;

export default { Wrapper, ErrorCode, ErrorMessage };
