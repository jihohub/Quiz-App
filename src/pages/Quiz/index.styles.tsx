import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 3% auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: 10% auto;
  }
`;

export default { Wrapper };
