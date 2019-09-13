import React, { useEffect } from "react";
import { searchRepos } from "@features/search-repos/api";
import { getDateFromThePast } from "@lib/date-builder";
import { queryDateBuilder } from "@lib/query-date-builder";
import { LICENSE } from "@lib/license";

export const HomePage = () => {
  useEffect(() => {
    const createdDate = getDateFromThePast({ days: 30 });
    const createdQuery = queryDateBuilder(">", createdDate);
    const license = Object.keys(LICENSE)[0];

    searchRepos({
      // query
      lang: "javascript",
      created: createdQuery,
      license: license,
      // other
      sort: "star",
      page: 1,
      perPage: 100
    }).then(response => console.log(response));
  }, []);

  return <h1>Hello from Home page!</h1>;
};
