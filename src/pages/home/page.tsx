import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { effects, selecotrs } from "@features/search-repos";

import { getDateFromThePast } from "@lib/date-builder";
import { queryDateBuilder } from "@lib/query-date-builder";
import { LICENSE } from "@lib/license";

import { MainTemplate } from "@ui/templates";

export const HomePage = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector(selecotrs.getFetchingStatus);
  const itemsById = useSelector(selecotrs.getItemsById);

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
        page: 1,
        perPage: 100
      })
    );
  }, [dispatch]);

  return <MainTemplate>{isFetching}</MainTemplate>;
};
