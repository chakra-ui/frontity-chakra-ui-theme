import { Box, Heading, Text } from "@chakra-ui/core";
import React from "react";
import { PatternBox, PatternBoxInner } from "../newsletter";

export const SearchResultTitle = ({ resultCount, query }) => (
  <Box>
    <Heading
      size="md"
      as="h6"
      fontWeight="medium"
      textTransform="uppercase"
      color="#eca419"
    >
      {resultCount} {resultCount === 1 ? "result" : "results"} for
    </Heading>
    <Heading
      mt={4}
      fontWeight="medium"
      as="h1"
      textTransform="uppercase"
      fontSize="3.5rem"
      color="white"
    >
      ‘{query}’
    </Heading>
  </Box>
);

export const NoResultTitle = ({ query }) => (
  <Box>
    <Heading
      as="h6"
      fontWeight="medium"
      textTransform="uppercase"
      color="#eca419"
    >
      No results for:{" "}
      <Box as="b" color="white">
        ‘{query}’
      </Box>
    </Heading>
    <Text mt={4} fontSize="xl" color="white">
      We could not find any results for your search. You can give it another try
      through the search form below.
    </Text>
  </Box>
);

export const SearchResults = ({ isEmpty, resultCount, query }) => (
  <>
    <PatternBox pb="60px">
      <PatternBoxInner>
        {isEmpty ? (
          <NoResultTitle query={query} />
        ) : (
          <SearchResultTitle query={query} resultCount={resultCount} />
        )}
      </PatternBoxInner>
    </PatternBox>
    <ArchivePosts>Search results here</ArchivePosts>
  </>
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
