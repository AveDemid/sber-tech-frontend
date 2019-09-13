import { request } from "@lib/request";
import { encodeQueryData } from "@lib/encode-query-data";

type Sort = "star" | "fork" | "help-wanted-issues" | "updated";

interface Config {
  lang: string;
  sort?: Sort;
  created?: string;
  license?: string;
  page?: number;
  perPage?: number;
}

export const searchRepos = ({
  lang,
  sort,
  created,
  license,
  page = 1,
  perPage = 0
}: Config) => {
  // TODO: found better soluction
  const listOfQ = [];
  const qLang = lang && `language:${lang}`;
  const qCreated = created && `created:${created}`;
  const qLicense = license && `license:${license}`;

  listOfQ.push(qLang, qCreated, qLicense);

  const q = listOfQ.filter(Boolean).join("+");

  const params = {
    q,
    page,
    sort,
    ["per_page"]: perPage
  };

  const query = encodeQueryData(params);

  return request(
    "GET",
    "https://api.github.com",
    `/search/repositories?${query}`
  );
};
