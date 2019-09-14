import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { effects, selecotrs, RepoList } from "@features/search-repos";

import { getDateFromThePast } from "@lib/date-builder";
import { queryDateBuilder } from "@lib/query-date-builder";
import { LICENSE } from "@lib/license";

import { Container, Text, Spinner } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

// Have no idea where to plase :|
type OptionType = { label: string; value: string };

export const HomePage = () => {
  // Redux
  const dispatch = useDispatch();
  const isFetching = useSelector(selecotrs.getFetchingStatus);
  const itemsList = useSelector(selecotrs.getItemsList);
  const error = useSelector(selecotrs.getError);

  // License
  const [license, setLicense] = useState<OptionType | null>(null);

  // Fetching data
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

  const getSpinner = () => {
    const condition = isFetching === "loading";

    return condition && <Spinner />;
  };

  const getSelectLicense = () => {
    const licenseKeys = Object.keys(LICENSE);
    const licenseValue = Object.values(LICENSE);

    const options = licenseKeys.map((item, index) => ({
      value: item,
      label: licenseValue[index] as string
    }));

    const condition = isFetching === "done";

    return (
      condition && (
        <Select
          options={options}
          value={license}
          onChange={value => setLicense(value as OptionType)}
          getOptionLabel={option => option.label}
          getOptionValue={option => option.value}
          placeholder="Select license..."
          isClearable
        />
      )
    );
  };

  const getRepoList = () => {
    const condition = isFetching === "done";

    return condition && itemsList && <RepoList list={itemsList} />;
  };

  const getError = () => {
    const condition = error && isFetching === "failed";

    return condition && <Text textType="large">{error}</Text>;
  };

  return (
    <MainTemplate>
      <Container size="medium">
        {getSpinner()}
        {getSelectLicense()}
        {getRepoList()}
        {getError()}
      </Container>
    </MainTemplate>
  );
};
