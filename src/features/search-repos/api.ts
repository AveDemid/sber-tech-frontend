import { request } from "@lib/request";
import { encodeQueryData } from "@lib/encode-query-data";

type Sort = "star" | "fork" | "help-wanted-issues" | "updated";

interface Config {
  lang: string;
  sort?: Sort;
  created?: string;
  page?: number;
  perPage?: number;
}

export const searchRepos = ({
  lang,
  sort,
  created,
  page = 1,
  perPage = 0
}: Config) => {
  const params = {
    q: `language:${lang}`,
    sort,
    created,
    page,
    ["per_page"]: perPage
  };

  const query = encodeQueryData(params);

  return request(
    "GET",
    "https://api.github.com",
    `/search/repositories?${query}`
  );
};
