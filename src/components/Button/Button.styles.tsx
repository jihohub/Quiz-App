import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border: 1px solid #00c896;
  border-radius: 8px;
  height: 5rem;
  min-width: 10rem;
  color: #00c896;
  margin: 0 1em;
  padding: 0.25em 1em;
  -webkit-transition: width 0.5s, height 0.5s, background-color 0.5s,
    -webkit-transform 0.5s;
  transition: width 0.5s, height 0.5s, background-color 0.5s, transform 0.5s;
  p {
    font-size: 1rem;
  }
  &:hover {
    color: #ffffff;
    background-color: #00c896;
    cursor: pointer;
    -webkit-transform: translateY(-0.5rem);
    transform: translateY(-0.5rem);
  }
`;

export default { Button };
