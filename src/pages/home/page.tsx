import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { effects, selecotrs } from "@features/search-repos";

import { getDateFromThePast } from "@lib/date-builder";
import { queryDateBuilder } from "@lib/query-date-builder";
import { LICENSE } from "@lib/license";

export const HomePage = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selecotrs.getFetchingStatus);

  console.log(isFetching);

  useEffect(() => {
    const createdDate = getDateFromThePast({ days: 30 });
    const createdQuery = queryDateBuilder(">", createdDate);
    const license = Object.keys(LICENSE)[0];

    dispatch(
      effects.searchReposEffect({
        lang: "javascript",
        created: createdQuery,
        license: license,
        sort: "star",
        page: 2,
        perPage: 100
      })
    );
  }, [dispatch]);

  return (
    <div>
      <h1>Hello world :)</h1>
    </div>
  );
};
