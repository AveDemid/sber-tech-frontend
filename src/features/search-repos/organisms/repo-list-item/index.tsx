import React, { useMemo } from "react";

import { RepoListItemBox, UserArea, RepoArea, AvatarContainer } from "./styled";

import { Repo } from "./../../types";

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
        <UserArea>
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
        </UserArea>

        <RepoArea>
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
        </RepoArea>
      </RepoListItemBox>
    ),
    [avatarUrl, description, license, repoName, stars, userName]
  );
};
