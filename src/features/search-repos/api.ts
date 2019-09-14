import { request } from "@lib/request";
import { encodeQueryData } from "@lib/encode-query-data";
import { SearchReposApiConfiguration } from "./types";

export const searchRepos = <T>({
  lang,
  sort,
  created,
  license,
  page = 1,
  perPage = 0
}: SearchReposApiConfiguration) => {
  // TODO: found better soluction
  const listOfQ = [];
  const qLang = lang && `language:${lang}`;
  const qCreated = created && `created:${created}`;
  const qLicense = license && `license:${license}`;

  listOfQ.push(qLang, qCreated, qLicense);

  const q = listOfQ.filter(Boolean).join("+");

  const params = {
    q,
    sort,
    page,
    ["per_page"]: perPage
  };

  const query = encodeQueryData(params);

  return request<T>(
    "GET",
    "https://api.github.com",
    `/search/repositories?${query}`
  );
};
