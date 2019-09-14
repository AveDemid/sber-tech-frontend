import React from "react";
import styled from "styled-components";

import { Repo } from "../types";
import { RepoListItem } from "./repo-list-item";

import { Text } from "@ui/atoms";

export const RepoList = ({ list }: { list: Repo[] }) => (
  <RepoListBox>
    {list.length ? (
      list.map((item, key) => <RepoListItem key={key} item={item} />)
    ) : (
      <Text textType="large" fontWeight="100">
        We did not find a match
      </Text>
    )}
  </RepoListBox>
);

export const RepoListBox = styled("div")`
  margin: 1.6rem 0;
`;
