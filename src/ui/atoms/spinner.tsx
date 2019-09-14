import styled, { keyframes } from "styled-components";

const animation = keyframes`
  10% { content: "⠙"; color: #F58529 }
  20% { content: "⠹";}
  30% { content: "⠸"; color: #FEDA77 }
  40% { content: "⠼";}
  50% { content: "⠴"; color: #DD2A7B }
  60% { content: "⠦";}
  70% { content: "⠧"; color: #8134AF}
  80% { content: "⠇";}
  90% { content: "⠏"; color: #515BD4}
`;

export const Spinner = styled("div")`
  color: #f58529;
  display: flex;
  justify-content: center;
  &::after {
    display: block;
    content: "⠋";
    font-size: 8rem;
    animation: ${animation} 1s linear infinite;
  }
`;
