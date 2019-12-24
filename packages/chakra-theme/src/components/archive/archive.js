import React from "react";
import { connect, styled } from "frontity";
import ArchiveItem from "./archive-item";
import Pagination from "./pagination";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/core";
import { splitPosts, formatPostData } from "../helpers";
import { FeaturedPostSection } from "../featured-post/featured-post";
import { Newsletter } from "../newsletter";
import { PatternBox, PatternBoxInner } from "../styles/pattern-box";

const HomepageArchive = connect(({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const [firstThreePosts, othersPosts] = splitPosts(state, data.items);

  return (
    <Box bg="#dfd7c7" as="section">
      <FeaturedPostSection
        data={firstThreePosts.map(post => formatPostData(state, post))}
      />
      <Box py="80px" px="40px" width="80%" maxWidth="1200px" mx="auto">
        <Heading
          textTransform="uppercase"
          textAlign="center"
          fontSize="6xl"
          color="#eca419"
        >
          Latest Posts
        </Heading>

        <SimpleGrid mt="80px" columns={{ base: 1, md: 2 }} spacing="40px">
          {othersPosts.map(({ type, id }) => {
            const item = state.source[type][id];
            return <ArchiveItem key={item.id} item={item} />;
          })}
        </SimpleGrid>

        <Pagination mt="40px" />
      </Box>
      <Newsletter />
    </Box>
  );
});

const ArchiveHeader = ({ taxonomy, title, ...props }) => (
  <PatternBox pb="80px" mb="-80px" {...props}>
    <PatternBoxInner>
      <Text textTransform="uppercase" color="#fff" fontWeight="bold">
        {taxonomy}
      </Text>
      <Heading mt="8px" textTransform="uppercase" size="2xl" color="#eca419">
        {title}
      </Heading>
    </PatternBoxInner>
  </PatternBox>
);

const Archive = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  const isHomePage = state.router.link === "/";
  if (isHomePage) return <HomepageArchive />;

  return (
    <Box bg="#dfd7c7" as="section">
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <ArchiveHeader
          taxonomy={data.taxonomy}
          title={state.source[data.taxonomy][data.id].name}
        />
      )}
      {/* If the list is an author, we render a title. */}
      {data.isAuthor && (
        <ArchiveHeader
          taxonomy="Posts By"
          title={state.source.author[data.id].name}
        />
      )}

      <Box padding="40px" bg="white" width="80%" maxWidth="1200px" mx="auto">
        {/* Iterate over the items of the list. */}
        <SimpleGrid columns={2} spacing="40px">
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            return <ArchiveItem key={item.id} item={item} />;
          })}
        </SimpleGrid>
        <Pagination />
      </Box>
    </Box>
  );
};

export default connect(Archive);
