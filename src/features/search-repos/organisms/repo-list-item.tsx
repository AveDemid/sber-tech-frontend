import React, { useMemo } from "react";
import styled from "styled-components";

import { Repo } from "./../types";

import { breakpoints } from "@lib/breakpoints";

import { TextContainer } from "@ui/atoms";
import { AvatarWithSpinner } from "@ui/molecuels";

export const RepoListItem = ({ item }: { item: Repo }) => {
  const avatarUrl = item.owner.avatar_url;
  const userName = item.owner.login;
  const repoName = item.name;
  const stars = item.watchers_count;
  const license = item.license && item.license.name;
  const description = item.description;

  return useMemo(
    () => (
      <RepoListItemBox>
        <Left>
          <AvatarContainer>
            <AvatarWithSpinner url={avatarUrl} alt={userName} />
          </AvatarContainer>

          <TextContainer
            fontWeight="200"
            textType="extraSmall"
            withoutMargin
            overflowEllipsis
          >
            {repoName}
          </TextContainer>
        </Left>

        <Right>
          <TextContainer
            fontWeight="200"
            textType="large"
            withoutMargin
            overflowEllipsis
          >
            {repoName}
          </TextContainer>

          <TextContainer
            fontWeight="300"
            textType="medium"
            withoutMargin
            overflowEllipsis
          >
            Stars: {stars}
          </TextContainer>

          <TextContainer
            fontWeight="300"
            textType="medium"
            withoutMargin
            overflowEllipsis
          >
            License: {license ? license : "No license"}
          </TextContainer>

          <TextContainer
            fontWeight="300"
            textType="medium"
            withoutMargin
            overflowEllipsis
          >
            Description: {description ? description : "No description"}
          </TextContainer>
        </Right>
      </RepoListItemBox>
    ),
    [avatarUrl, description, license, repoName, stars, userName]
  );
};

const RepoListItemBox = styled("div")`
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

const Left = styled("div")`
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

const Right = styled("div")`
  overflow: hidden;
  max-width: 100%;
`;

const AvatarContainer = styled("div")`
  margin-bottom: 0.8rem;
`;
