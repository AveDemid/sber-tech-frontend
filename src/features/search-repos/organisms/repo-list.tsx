import React from "react";
import styled from "styled-components";
import { Repo } from "../types";

import { RepoListItem } from "./repo-list-item";

export const RepoList = ({ list }: { list: Repo[] }) => (
  <RepoListBox>
    {list.map((item, key) => (
      <RepoListItem key={key} item={item} />
    ))}
  </RepoListBox>
);

export const RepoListBox = styled("div")`
  margin: 1.6rem 0;
`;
