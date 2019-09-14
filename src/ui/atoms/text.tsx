import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

type TextType = "extraSmall" | "small" | "medium" | "large" | "extraLarge";

type TextStylesBySize = {
  [key in TextType]: {
    fontSize: string;
    lineHeight: string;
    marginButton: string;
  };
};

const textStylesByType: TextStylesBySize = {
  extraSmall: {
    fontSize: "1.3rem",
    lineHeight: "2.4rem",
    marginButton: "0.4rem"
  },
  small: {
    fontSize: "1.6rem",
    lineHeight: "2.8rem",
    marginButton: "0.7rem"
  },
  medium: {
    fontSize: "2.0rem",
    lineHeight: "3.4rem",
    marginButton: "1.1rem"
  },
  large: {
    fontSize: "2.6rem",
    lineHeight: "4.3rem",
    marginButton: "1.7rem"
  },
  extraLarge: {
    fontSize: "3.3rem",
    lineHeight: "5.3rem",
    marginButton: "2.8rem"
  }
};

interface TextProps {
  textType?: TextType;
  withoutMargin?: boolean;
  overflowEllipsis?: boolean;
}

export const Text = styled("p")<TextProps>`
  ${({ textType = "small", withoutMargin = false }) => css`
    font-size: ${textStylesByType[textType].fontSize};
    line-height: ${textStylesByType[textType].lineHeight};
    margin-bottom: ${withoutMargin ? "0" : textStylesByType[textType].fontSize};
  `}

  ${({ overflowEllipsis = false }) =>
    overflowEllipsis &&
    css`
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`;

interface TextContainerProps extends TextProps {
  children?: ReactNode;
}

export const TextContainer = ({ children, ...props }: TextContainerProps) => (
  <TextContainerBox {...props}>
    <Text {...props}>{children}</Text>
  </TextContainerBox>
);

export const TextContainerBox = styled("div")<TextContainerProps>`
  ${({ textType = "small", withoutMargin = false }) => {
    return css`
      height: ${textStylesByType[textType].lineHeight};
      margin-bottom: ${withoutMargin
        ? "0"
        : textStylesByType[textType].marginButton};
    `;
  }}
`;
