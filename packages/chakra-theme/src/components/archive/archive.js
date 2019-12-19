import React from "react";
import { connect, styled } from "frontity";
import ArchiveItem from "./archive-item";
import Pagination from "./pagination";
import { SimpleGrid, Box, Heading } from "@chakra-ui/core";
import { splitPosts, formatPostData } from "../helpers";
import { FeaturedPostSection } from "../featured-post/featured-post";
import { Newsletter } from "../newsletter";

const Archive = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const [firstThreePosts, othersPosts] = splitPosts(state, data.items);

  const isHomePage = state.router.link === "/";

  if (isHomePage) {
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
  }

  return (
    <Box bg="#dfd7c7" as="section" pt="70px">
      <Box padding="40px" bg="white" width="80%" maxWidth="1200px" mx="auto">
        {/* If the list is a taxonomy, we render a title. */}
        {data.isTaxonomy && (
          <Header>
            {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
          </Header>
        )}

        {/* If the list is an author, we render a title. */}
        {data.isAuthor && (
          <Header>Author: {state.source.author[data.id].name}</Header>
        )}

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

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
