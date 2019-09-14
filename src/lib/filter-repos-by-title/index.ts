import { Repo } from "@features/search-repos/types";

export const filterReposByTitle = (list: Repo[], filter: string): Repo[] =>
  list.filter(item => item.name.toLocaleLowerCase().includes(filter));
