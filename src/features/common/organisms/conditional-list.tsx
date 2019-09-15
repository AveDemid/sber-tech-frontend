import React, { Fragment } from "react";

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IConditionalList {
  isLoaderRender: boolean | null;
  isListRender: boolean | null;
  isListEmptyRender: boolean | null;
  isErrorRender: boolean | null;
  loader: JSX.Element;
  list: JSX.Element;
  listEmpty: JSX.Element;
  error: JSX.Element;
}

export const ConditionalList = ({
  isLoaderRender,
  isListRender,
  isListEmptyRender,
  isErrorRender,
  loader,
  list,
  listEmpty,
  error
}: IConditionalList) => {
  return (
    <Fragment>
      {isLoaderRender && loader}
      {isListRender && list}
      {isListEmptyRender && listEmpty}
      {isErrorRender && error}
    </Fragment>
  );
};
