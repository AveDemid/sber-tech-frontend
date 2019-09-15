import styled from "styled-components";
import { breakpoints } from "@lib/breakpoints";

export const RepoListItemBox = styled("div")`
  padding: 1.6rem;
  margin-bottom: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1.6rem;
  @media (min-width: ${breakpoints.small}) {
    flex-direction: row;
    text-align: left;
    align-items: initial;
  }
`;

export const UserArea = styled("div")`
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${breakpoints.small}) {
    min-width: 9.6rem;
    max-width: 9.6rem;
    margin-left: 1.6rem;
    margin-right: 2.4rem;
    padding-top: 1.2rem;
  }
`;

export const RepoArea = styled("div")`
  overflow: hidden;
  max-width: 100%;
`;

export const AvatarContainer = styled("div")`
  margin-bottom: 0.8rem;
`;
