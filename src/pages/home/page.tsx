import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import Select from "react-select";

import { effects, selecotrs, RepoList } from "@features/search-repos";

import { getDateFromThePast } from "@lib/date-builder";
import { queryDateBuilder } from "@lib/query-date-builder";
import { LICENSE } from "@lib/license";
import { filterReposByTitle } from "@lib/filter-repos-by-title";

import { Container, Text, Spinner, Input, FormGroup } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

type OptionType = { label: string; value: string };

export const HomePage = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector(selecotrs.getFetchingStatus);
  const itemsList = useSelector(selecotrs.getItemsList);
  const error = useSelector(selecotrs.getError);

  const [license, setLicense] = useState<OptionType | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [debouncedFilter] = useDebounce(filter, 500);

  useEffect(() => {
    const createdDate = getDateFromThePast({ days: 30 });
    const createdQuery = queryDateBuilder(">", createdDate);
    const licenseValue = license && license.value;

    dispatch(
      effects.searchReposEffect({
        lang: "javascript",
        created: createdQuery,
        license: licenseValue,
        sort: "star",
        page: 1,
        perPage: 100
      })
    );
  }, [dispatch, license]);

  const getSpinner = useMemo(() => {
    const condition = isFetching === "loading";

    return condition && <Spinner />;
  }, [isFetching]);

  const getSelectLicense = useMemo(() => {
    const licenseKeys = Object.keys(LICENSE);
    const licenseValue = Object.values(LICENSE);

    const options = licenseKeys.map((item, index) => ({
      value: item,
      label: licenseValue[index] as string
    }));

    const condition = isFetching === "done";

    return (
      condition && (
        <FormGroup>
          <Select
            options={options}
            value={license}
            onChange={value => setLicense(value as OptionType)}
            getOptionLabel={option => option.label}
            getOptionValue={option => option.value}
            placeholder="Select license..."
            isClearable
          />
        </FormGroup>
      )
    );
  }, [isFetching, license]);

  const getFilterByTitle = useMemo(() => {
    const condition = isFetching === "done";

    return (
      condition && (
        <FormGroup>
          <Input
            type="text"
            value={filter}
            onChange={event => setFilter(event.target.value)}
            placeholder="Filter repos by title"
          />
        </FormGroup>
      )
    );
  }, [filter, isFetching]);

  const getError = useMemo(() => {
    const condition = error && isFetching === "failed";

    return condition && <Text textType="large">{error}</Text>;
  }, [error, isFetching]);

  const getRepoList = () => {
    const condition = isFetching === "done";

    const filteredList =
      itemsList && filterReposByTitle(itemsList, debouncedFilter);

    return condition && filteredList && <RepoList list={filteredList} />;
  };

  return (
    <MainTemplate>
      <Container size="medium">
        {getSpinner}
        {getFilterByTitle}
        {getSelectLicense}
        {getRepoList()}
        {getError}
      </Container>
    </MainTemplate>
  );
};
