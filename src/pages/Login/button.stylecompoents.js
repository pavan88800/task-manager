import styled from "styled-components";

export const Button = styled.button`
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  font-size: 17px;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  background: ${(props) => props.bgColor};
  color: #fff;
`;
