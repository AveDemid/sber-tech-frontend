import React from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

interface PaginatorProps {
  pageCount: number;
  pageRangeDisplayed: number;
  marginPagesDisplayed: number;
  initialPage: number;
  onPageChange(x: number): void;
}

export const Paginator = ({
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
  initialPage,
  onPageChange
}: PaginatorProps) => {
  console.log(initialPage, "INITIAL PAGE");
  return (
    <PaginatorBox>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        initialPage={initialPage}
        onPageChange={event => {
          onPageChange(event.selected);
        }}
        previousClassName="previous"
        nextClassName="next"
        containerClassName="paginator"
        pageLinkClassName="link"
        activeLinkClassName="active-link"
        breakLabel=""
      />
    </PaginatorBox>
  );
};

// Meh....
const PaginatorBox = styled("div")`
  padding: 1.6rem 0;

  .previous {
    display: none;
  }
  .next {
    display: none;
  }

  .paginator {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .link {
    display: block;
    color: #212529;
    padding: 0 8px;
    &:hover {
      background-color: #eee;
      text-decoration: none;
    }
  }

  .active-link {
    background-color: #ff3547;
    color: #fff;
    &:hover {
      background-color: #ff3547;
    }
  }
`;
