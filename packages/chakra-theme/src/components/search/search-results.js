import { Box, Heading } from "@chakra-ui/core";
import { connect } from "frontity";
import React from "react";
import Archive from "../archive";
import { PatternBox, PatternBoxInner } from "../newsletter";

const SearchHeader = ({ label, title, ...props }) => (
  <Box {...props}>
    <Heading
      size="md"
      as="h6"
      fontWeight="medium"
      textTransform="uppercase"
      color="#eca419"
    >
      {label}
    </Heading>

    <Heading
      mt={4}
      fontWeight="medium"
      as="h1"
      textTransform="uppercase"
      fontSize="3.5rem"
      color="white"
    >
      {title}
    </Heading>
  </Box>
);

const SearchResultTitle = ({ resultCount, query }) => (
  <SearchHeader
    title={`‘${query}’`}
    label={`${resultCount} ${resultCount > 1 ? "results" : "result"} for`}
  />
);

const NoResultTitle = ({ query }) => (
  <SearchHeader label={`0 result for`} title={`‘${query}’`} />
);

const ArchivePosts = props => (
  <Box
    p="80px"
    pb="0"
    maxW="1400px"
    position="relative"
    mx="auto"
    mt="-60px"
    bg="white"
    width="92%"
    {...props}
  />
);

export const SearchResults = ({ state, libraries }) => {
  const currentPath = state.router.link;

  // Get the total pages that match the current path/url
  const { total } = state.source.data[currentPath];
  const isEmpty = total === 0;

  // Parse to current url to get the search query
  const parse = libraries.source.parse(state.router.link);

  // Parse returns an object whose query string is stored in "s"
  const searchQuery = parse.query["s"];

  // Since we formatted the query string in the search modal, let's reverse the formatting
  const reverseFormat = query => query.replace("+", " ");

  return (
    <Box bg="#dfd7c7">
      <PatternBox pb="60px" mb="-60px">
        <PatternBoxInner>
          {isEmpty ? (
            <NoResultTitle query={reverseFormat(searchQuery)} />
          ) : (
            <SearchResultTitle query={searchQuery} resultCount={total} />
          )}
        </PatternBoxInner>
      </PatternBox>

      {isEmpty ? <ArchivePosts>Show the form here</ArchivePosts> : <Archive />}
    </Box>
  );
};

export default connect(SearchResults);
