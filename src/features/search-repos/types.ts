export interface SearchReposApiConfiguration {
  lang: string;
  sort?: "star" | "fork" | "help-wanted-issues" | "updated";
  created?: string;
  license?: string | null;
  page?: number;
  perPage?: number;
}

export type FetchingStatus = "initial" | "loading" | "done" | "failed";

export interface Repo {
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string;
  default_branch: string;
  deployments_url: string;
  description: string | null;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string | null;
  hooks_url: string;
  html_url: string;
  id: number;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string;
  languages_url: string;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  merges_url: string;
  milestones_url: string;
  mirror_url: string | null;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
  };
  private: boolean;
  pulls_url: string;
  pushed_at: string;
  releases_url: string;
  score: number;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  updated_at: string;
  url: string;
  watchers: number;
  watchers_count: number;
}

export interface SearchRepos {
  incomplete_results: boolean;
  items: Repo[];
  total_count: number;
}

export interface SuccsessfulPayload {
  incompleteResults: boolean;
  totalCount: number;
  itemsById: { [key: string]: Repo };
  itemsIds: number[];
}

export interface FailfullPayload {
  error: string;
}

export interface Store {
  fetchingStatus: FetchingStatus;
  incompleteResults: boolean | null;
  totalCount: number | null;
  itemsById: { [key: string]: Repo } | null;
  itemsIds: number[] | null;
  error: string | null;
}
