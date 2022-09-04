import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  max-width: 50%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;

const ResultText = styled.p`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default { Wrapper, ResultText };
