import React from "react";

import { RepoListBox } from "./styled";

import { Repo } from "./../../types";
import { RepoListItem } from "./../repo-list-item";

export const RepoList = ({ list }: { list: Repo[] | null }) => (
  <RepoListBox>
    {list && list.map((item, key) => <RepoListItem key={key} item={item} />)}
  </RepoListBox>
);
