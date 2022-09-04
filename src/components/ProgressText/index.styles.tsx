import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
`;
const Progress = styled.p`
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default { Container, Progress };
