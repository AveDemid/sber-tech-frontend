import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { effects, selecotrs, RepoList } from "@features/search-repos";

import { getDateFromThePast } from "@lib/date-builder";
import { queryDateBuilder } from "@lib/query-date-builder";

import { Container, Text, Spinner } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

export const HomePage = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector(selecotrs.getFetchingStatus);
  const itemsList = useSelector(selecotrs.getItemsList);
  const error = useSelector(selecotrs.getError);

  useEffect(() => {
    const createdDate = getDateFromThePast({ days: 30 });
    const createdQuery = queryDateBuilder(">", createdDate);
    const license = undefined;

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

  return (
    <MainTemplate>
      <Container size="medium">
        {isFetching === "loading" && <Spinner />}

        {itemsList && isFetching === "done" && <RepoList list={itemsList} />}

        {error && isFetching === "failed" && (
          <Text textType="large">{error}</Text>
        )}
      </Container>
    </MainTemplate>
  );
};
