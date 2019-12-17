import React from "react";
import { SearchResults } from "../components/search/search-results";
import PostPreview from "../components/post/post-preview";
import { SimpleGrid, Stack } from "@chakra-ui/core";
import { PrevLink, NextLink } from "../components/archive/pagination";

export default {
  title: "Search"
};

export const searchHeader = () => (
  <SearchResults query="Frontity" resultCount={10} isEmpty />
);

const data = {
  title: "Darn Tough Hiker Micro Crew Cushion Socks Review",
  description: "Darn Tough socks are just that — really freakin’ tough.",
  link:
    "https://www.territorysupply.com/darn-tough-hiker-micro-crew-cushion-socks-review",
  image: {
    src:
      "https://www.territorysupply.com/wp-content/uploads/2019/12/Darn-Tough-Hiker-Micro-Crew-Cushion-Socks-Review-552x370.jpg",
    alt: "Darn Tough Hiker Micro Crew Cushion Socks Review"
  },
  categories: [
    {
      name: "Gear",
      link: "/gear",
      id: 0
    },
    {
      name: "Travel",
      link: "/gear",
      id: 1
    },
    {
      name: "Chiling",
      link: "/chilling",
      id: 2
    }
  ]
};

export const postPreview = () => <PostPreview {...data} maxW="440px" />;

export const postGrid = () => (
  <SimpleGrid spacing="4%" columns={2}>
    <PostPreview {...data} />
    <PostPreview {...data} />
    <PostPreview {...data} />
    <PostPreview {...data} />
  </SimpleGrid>
);

export const pagination = () => (
  <Stack direction="row">
    <PrevLink isDisabled />
    <NextLink />
  </Stack>
);
