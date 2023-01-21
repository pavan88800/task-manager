import styled from "styled-components";

export const Button = styled.button`
  width: 300px;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  background: ${(props) => props.bgColor};
  color: #fff;
`;
