import styled from "styled-components";

export const Input = styled("input")`
  width: 100%;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  min-height: 36px;
  outline: 0;
  position: relative;
  padding: 2px 10px;
  &:placeholder {
    color: hsl(0, 0%, 50%);
  }
  &:focus {
    border-color: #2684ff;
  }
`;
