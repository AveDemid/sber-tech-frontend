import { SearchRepos, Repo } from "./../types";

export const getSearchReposById = (response: SearchRepos) => {
  return response.items.reduce(
    (acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    },
    {} as { [key: string]: Repo }
  );
};

export const getSearchReposIds = (response: SearchRepos) => {
  return response.items.reduce(
    (acc, curr) => {
      acc.push(curr.id);
      return acc;
    },
    [] as number[]
  );
};
