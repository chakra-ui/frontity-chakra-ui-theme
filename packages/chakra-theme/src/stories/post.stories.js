import React from "react";
import PostCategories from "../components/post/post-categories";
import PostHeader from "../components/post/post-header";
import {
  PrimaryPostPreview,
  SecondaryPostPreview
} from "../components/post/featured-post";
import { Flex, Box } from "@chakra-ui/core";

const data = {
  categories: [
    { id: 0, link: "www.google.com", name: "Aside" },
    { id: 1, link: "www.google.com", name: "Travel" },
    { id: 2, link: "www.google.com", name: "Life" }
  ],
  heading:
    "Minimalist Design and Material Elements Are Central To Frama’s Copenhagen Residence",
  description:
    "Mike is a student Web Designer and Developer living in Southampton, UK.",
  author: "Sage Adebayo"
};

export default {
  title: "Post"
};

export const postCategories = () => (
  <PostCategories categories={data.categories} />
);

export const postHeader = () => (
  <PostHeader
    categories={data.categories}
    heading={data.heading}
    description={data.description}
    maxWidth="700px"
    mx="auto"
    publishDate="August 2019"
    noOfComments={3}
    author={{
      name: "Theresa Black",
      imageUrl: "https://uinames.com/api/photos/female/3.jpg"
    }}
  />
);

export const primaryPostPreview = () => <PrimaryPostPreview />;
export const secondaryPostPreview = () => <SecondaryPostPreview />;
export const composed = () => (
  <Flex direction={{ base: "column", lg: "row" }}>
    <Box width={{ base: "100%", lg: "65%" }} flexGrow="1">
      <PrimaryPostPreview />
    </Box>
    <Flex
      direction={{ base: "row", lg: "column" }}
      width={{ base: "100%", lg: "35%" }}
      flexGrow="1"
    >
      <SecondaryPostPreview />
      <SecondaryPostPreview />
    </Flex>
  </Flex>
);
