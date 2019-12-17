import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { Box } from "@chakra-ui/core";

const PaginationLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
  min-height: 60px;

  cursor: pointer;
  border: none;
  background: #333a35;
  color: #eca419;

  &:hover {
    background-color: #48584d;
    color: #eca419;
  }

  &[aria-disabled="true"] {
    background-color: #dfd7c7;
    cursor: auto;
    color: #a0a0a0;
  }
`;

export const PrevLink = ({
  isDisabled,
  label = "See previous posts",
  ...props
}) => (
  <Box width="100%" {...props}>
    <PaginationLink aria-label={label} aria-disabled={isDisabled}>
      <Box width="40px" height="auto" as={IoIosArrowRoundBack} />
      <span>Previous</span>
    </PaginationLink>
  </Box>
);

export const NextLink = ({
  isDisabled,
  label = "See next posts",
  ...props
}) => (
  <Box width="100%" {...props}>
    <PaginationLink aria-label={label} aria-disabled={isDisabled}>
      <span>Next</span>
      <Box width="40px" height="auto" as={IoIosArrowRoundForward} />
    </PaginationLink>
  </Box>
);

const Pagination = ({ state, actions, libraries }) => {
  const { totalPages } = state.source.get(state.router.link);
  const { path, page, query } = libraries.source.parse(state.router.link);

  const isThereNextPage = page < totalPages;
  const isTherePreviousPage = page > 1;

  const nextPageLink = libraries.source.stringify({
    path,
    page: page + 1,
    query
  });

  const prevPageLink = libraries.source.stringify({
    path,
    page: page - 1,
    query
  });

  // Fetch the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (isThereNextPage) actions.source.fetch(nextPageLink);
  }, []);

  return (
    <div>
      {isThereNextPage && (
        <Link link={nextPageLink}>
          <Text>← Older posts</Text>
        </Link>
      )}
      {isTherePreviousPage && isThereNextPage && " - "}
      {isTherePreviousPage && (
        <Link link={prevPageLink}>
          <Text>Newer posts →</Text>
        </Link>
      )}
    </div>
  );
};

export default connect(Pagination);

const Text = styled.em`
  display: inline-block;
  margin-top: 16px;
`;
