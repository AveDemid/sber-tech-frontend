import React from "react";
import styled, { keyframes } from "styled-components";

export const SpinnerCircle = () => (
  <SpinnerBox>
    <SpinnerItem color="#ffff99" rotate="0" />
    <SpinnerItem color="#ffcc66" rotate="45" />
    <SpinnerItem color="#ff9966" rotate="90" />
    <SpinnerItem color="#ff6699" rotate="135" />
    <SpinnerItem color="#cc66cc" rotate="180" />
    <SpinnerItem color="#cc99cc" rotate="225" />
    <SpinnerItem color="#fffad5" rotate="270" />
  </SpinnerBox>
);

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }`;

const SpinnerBox = styled("div")`
  display: block;
  width: 64px;
  height: 64px;
  position: relative;
  transform-origin: 32px 32px;
  animation: ${spin} 1s infinite linear;
  background: #fff;
  border-radius: 50%;
  overflow: hidden;
`;

const SpinnerItem = styled("div")<{ color: string; rotate: string }>`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  border-width: 0px 0px 16px 16px;
  border-style: solid;
  border-color: transparent;
  border-left-color: ${({ color }) => color};
  transform: ${({ rotate }) => `rotate(-${rotate}deg)`};
`;
