import styled from "styled-components";
import mainlogo from "../../assets/mainlogo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 80vh;
  background-image: url(${mainlogo});
  background-position: center;
  background-repeat: no-repeat;
`;

export default { Wrapper };
