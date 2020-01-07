import { Box, Heading, SimpleGrid } from "@chakra-ui/core";
import { connect } from "frontity";
import React from "react";
import { FeaturedPostSection } from "../featured-post/featured-post";
import { formatPostData, splitPosts } from "../helpers";
import { Newsletter } from "../newsletter";
import ArchiveItem from "./archive-item";
import Pagination from "./pagination";

const HomepageArchive = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const [firstThreePosts, othersPosts] = splitPosts(state, data.items);

  return (
    <Box bg="primary.100" as="section">
      <FeaturedPostSection
        data={firstThreePosts.map(post => formatPostData(state, post))}
      />
      <Box
        py={{ base: "64px", md: "80px" }}
        px={{ base: "24px", md: "40px" }}
        width={{ base: "auto", lg: "80%" }}
        maxWidth="1200px"
        mx="auto"
      >
        <Heading
          textTransform="uppercase"
          textAlign="center"
          fontSize={{ base: "4xl", md: "6xl" }}
          color="accent.400"
        >
          Latest Posts
        </Heading>

        <SimpleGrid
          mt={{ base: "64px", md: "80px" }}
          columns={{ base: 1, md: 2 }}
          spacing="40px"
        >
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
};

export default connect(HomepageArchive);
