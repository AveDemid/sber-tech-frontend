import styled, { css } from "styled-components";

export const breakpoints = {
  small: "36rem",
  medium: "48rem",
  large: "62rem",
  extraLarge: "75rem"
};

const extraLarge = css`
  @media (min-width: ${breakpoints.extraLarge}) {
    max-width: 114rem;
  }
`;

const large = css`
  @media (min-width: ${breakpoints.large}) {
    max-width: 96rem;
  }
`;

const medium = css`
  @media (min-width: ${breakpoints.medium}) {
    max-width: 72rem;
  }
`;

const small = css`
  @media (min-width: ${breakpoints.small}) {
    max-width: 54rem;
  }
`;

interface ContainerProps {
  size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge";
}

export const Container = styled("div")<ContainerProps>`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ size = "extraLarge" }) => {
    switch (size) {
      case "extraSmall":
        return;
      case "small":
        return [...small];
      case "medium":
        return [...small, ...medium];
      case "large":
        return [...small, ...medium, ...large];
      case "extraLarge":
        return [...small, ...medium, ...large, ...extraLarge];
    }
  }}
`;
