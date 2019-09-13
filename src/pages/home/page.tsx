import React, { useEffect } from "react";
import { searchRepos } from "@features/search-repos/api";
import { getDateFromThePast } from "@lib/date-builder";
import { queryDateBuilder } from "@lib/query-date-builder";

export const HomePage = () => {
  useEffect(() => {
    const createdDate = getDateFromThePast({ days: 30 });
    const createdQuery = queryDateBuilder("..", createdDate);

    searchRepos({
      sort: "star",
      created: createdQuery,
      lang: ""
    }).then(response => console.log(response));
  }, []);

  return <h1>Hello from Home page!</h1>;
};
