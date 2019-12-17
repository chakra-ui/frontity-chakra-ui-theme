import React from "react";
import {
  PostCategories,
  PostContent,
  PostImage,
  PostLink,
  PostOverlay,
  PostTitle,
  PrimaryPostArticle,
  SecondaryPostArticle
} from "./components";
import generateGradient from "./genarate-gradient";
import { Flex, Box } from "@chakra-ui/core";

export const PrimaryPostPreview = ({
  title = "Where to Find utah's most relaxing hot springs",
  categories = [
    ["Category 1", "./cat-1"],
    ["Category 2", "./cat-2"]
  ],
  link = "/link-to-post",
  image = "https://www.territorysupply.com/wp-content/uploads/2019/11/utah-hot-springs-900x550.jpg",
  ...props
}) => (
  <PrimaryPostArticle bgImage={generateGradient()} role="group" {...props}>
    <PostOverlay />
    <PostLink link={link} />
    <PostImage src={image} />
    <PostContent>
      <PostTitle>{title}</PostTitle>
      <PostCategories categories={categories} />
    </PostContent>
  </PrimaryPostArticle>
);

export const SecondaryPostPreview = ({
  title = "Where to Find utah's most relaxing hot springs",
  categories = [
    ["Category 1", "./cat-1"],
    ["Category 2", "./cat-2"]
  ],
  link = "/link-to-post-2",
  image = "https://www.territorysupply.com/wp-content/uploads/2019/11/utah-hot-springs-900x550.jpg",
  ...props
}) => (
  <SecondaryPostArticle bgImage={generateGradient()} role="group" {...props}>
    <PostOverlay />
    <PostLink link={link} />
    <PostImage src={image} />
    <PostContent padding="40px" textAlign="left" mt="0">
      <PostCategories justify="flex-start" categories={categories} />
      <PostTitle as="h2" mt="auto" pt="40px" fontSize="1.65rem">
        {title}
      </PostTitle>
    </PostContent>
  </SecondaryPostArticle>
);

export const FeaturedPostSection = ({ data, ...props }) => (
  <Flex as="section" direction={{ base: "column", lg: "row" }} {...props}>
    <Box width={{ base: "100%", lg: "65%" }} flexGrow="1">
      <PrimaryPostPreview {...data[0]} />
    </Box>
    <Flex
      direction={{ base: "row", lg: "column" }}
      width={{ base: "100%", lg: "35%" }}
      flexGrow="1"
    >
      <SecondaryPostPreview {...data[1]} />
      <SecondaryPostPreview {...data[2]} />
    </Flex>
  </Flex>
);
