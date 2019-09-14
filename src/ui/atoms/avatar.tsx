import React from "react";
import styled from "styled-components";

interface AvatarUrl {
  url: string;
  alt: string;
  loadCallback?(): void;
}

export const Avatar = ({ url, loadCallback }: AvatarUrl) => (
  <AvatarBox>
    <AvatarPlaceholder />
    <AvatarImage src={url} alt={url} onLoad={loadCallback} />
  </AvatarBox>
);

const AvatarBox = styled("div")`
  max-width: 6.4rem;
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  overflow: hidden;
  background: transparent;
`;

const AvatarPlaceholder = styled("div")`
  width: 100%;
  padding-bottom: 100%;
  border-radius: 50%;
`;

const AvatarImage = styled("img")`
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`;
