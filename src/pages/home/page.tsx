import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import Select from "react-select";

import { effects, selecotrs, RepoList } from "@features/search-repos";
import { Paginator } from "@features/paginator";
import { ConditionalList } from "@features/common";

import { getDateFromThePast } from "@lib/date-builder";
import { queryDateBuilder } from "@lib/query-date-builder";
import { LICENSE } from "@lib/license";
import { filterReposByTitle } from "@lib/filter-repos-by-title";

import { Container, Text, Spinner, Input, FormGroup } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

type OptionType = { label: string; value: string };

export const HomePage = () => {
  // Redux
  const dispatch = useDispatch();
  const fetchingStatus = useSelector(selecotrs.getFetchingStatus);
  const itemsList = useSelector(selecotrs.getItemsList);
  const error = useSelector(selecotrs.getError);
  const isIncompleteResults = useSelector(selecotrs.getIncompleteResults);
  const totalCount = useSelector(selecotrs.getTotalCount);

  // License
  const [license, setLicense] = useState<OptionType | null>(null);

  // Title
  const [filter, setFilter] = useState<string>("");
  const [debouncedFilter] = useDebounce(filter, 500);

  // CurrentPage
  const [currentPage, setCurrentPage] = useState(0);

  // Fetcing Data
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
        page: currentPage + 1,
        perPage: 100
      })
    );
  }, [currentPage, dispatch, license]);

  // FILTER BY TITLE
  const isFilterByTitleRender = useMemo(
    () => fetchingStatus === "done" && itemsList && !!itemsList.length,
    [fetchingStatus, itemsList]
  );

  const handleInputChage = useCallback(event => {
    setFilter(event.target.value);
  }, []);

  const filteredList = useMemo(
    () => itemsList && filterReposByTitle(itemsList, debouncedFilter),
    [debouncedFilter, itemsList]
  );

  // CONDITIONAL LIST
  const isLoaderRender = useMemo(() => fetchingStatus === "loading", [
    fetchingStatus
  ]);

  const isListRender = useMemo(
    () => fetchingStatus === "done" && itemsList && !!itemsList.length,
    [fetchingStatus, itemsList]
  );

  const isListEmptyRender = useMemo(
    () => fetchingStatus === "done" && filteredList && !filteredList.length,
    [fetchingStatus, filteredList]
  );

  const isErrorRender = useMemo(() => fetchingStatus === "failed" && !!error, [
    error,
    fetchingStatus
  ]);

  // PAGINATOR
  const isPaginatorRender = useMemo(
    () =>
      !isIncompleteResults &&
      fetchingStatus === "done" &&
      !debouncedFilter.length,
    [debouncedFilter.length, fetchingStatus, isIncompleteResults]
  );

  const pageCount = useMemo(() => {
    if (totalCount && totalCount > 1000) {
      return 10;
    } else {
      return (totalCount && totalCount / 100) || 0;
    }
  }, [totalCount]);

  // FILTER BY LICENSE
  const isFilterByLicenseRender = useMemo(
    () => fetchingStatus === "done" && itemsList && !!itemsList.length,
    [fetchingStatus, itemsList]
  );

  const getFilterByLicnese = useMemo(() => {
    const licenseKeys = Object.keys(LICENSE);
    const licenseValue = Object.values(LICENSE);

    const options = licenseKeys.map((item, index) => ({
      value: item,
      label: licenseValue[index] as string
    }));

    return (
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
    );
  }, [license]);

  return (
    <MainTemplate>
      <Container size="medium">
        {isFilterByTitleRender && (
          <FormGroup>
            <Input
              placeholder="Enter repository title"
              value={filter}
              onChange={handleInputChage}
            />
          </FormGroup>
        )}

        {isFilterByLicenseRender && getFilterByLicnese}

        <ConditionalList
          isLoaderRender={isLoaderRender}
          isListRender={isListRender}
          isListEmptyRender={isListEmptyRender}
          isErrorRender={isErrorRender}
          loader={<Spinner />}
          list={<RepoList list={filteredList} />}
          listEmpty={
            <Text textType="large" fontWeight="100">
              We did not find a match
            </Text>
          }
          error={
            <Text textType="large" fontWeight="100">
              {error}
            </Text>
          }
        />

        {isPaginatorRender && (
          <Paginator
            pageCount={pageCount}
            pageRangeDisplayed={0}
            marginPagesDisplayed={3}
            initialPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
      </Container>
    </MainTemplate>
  );
};
