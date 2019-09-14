import React, { useState } from "react";
import styled from "styled-components";

import { Avatar, SpinnerCircle } from "@ui/atoms";

interface AvatarWithSpinnerProps {
  url: string;
  alt: string;
}

export const AvatarWithSpinner = ({ url, alt }: AvatarWithSpinnerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const loadCallback = () => {
    setIsLoading(false);
  };

  return (
    <AvatarBox>
      <SpinnerBox isLoading={isLoading}>
        <SpinnerCircle />
      </SpinnerBox>
      <Avatar url={url} alt={alt} loadCallback={loadCallback} />
    </AvatarBox>
  );
};

const AvatarBox = styled("div")`
  position: relative;
  width: 64px;
  height: 64px;
`;

const SpinnerBox = styled("div")<{ isLoading: boolean }>`
  position: absolute;
  width: 64px;
  height: 64px;
  top: 0;
  left: 0;
  z-index: 1;
  display: ${({ isLoading }) => (isLoading ? "block" : "none")};
`;
