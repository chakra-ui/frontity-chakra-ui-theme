import React from "react";
import {
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
import PostCategories from "../post/post-categories";
import Link from "../link";

export const PrimaryPostPreview = ({ data, ...props }) => {
  const {
    title = "Where to Find utah's most relaxing hot springs",
    categories = [
      ["Category 1", "./cat-1"],
      ["Category 2", "./cat-2"]
    ],
    link = "/link-to-post",
    featured_media = {
      alt: "anything",
      src:
        "https://www.territorysupply.com/wp-content/uploads/2019/11/utah-hot-springs-900x550.jpg"
    }
  } = data;

  return (
    <PrimaryPostArticle bgImage={generateGradient()} role="group" {...props}>
      <PostOverlay />
      <PostLink link={link} />
      <PostImage {...featured_media} />
      <PostContent>
        <PostTitle>{title}</PostTitle>
        <PostCategories categories={categories} />
      </PostContent>
    </PrimaryPostArticle>
  );
};

export const SecondaryPostPreview = ({ data, ...props }) => {
  const {
    title = "Where to Find utah's most relaxing hot springs",
    categories = [
      ["Category 1", "./cat-1"],
      ["Category 2", "./cat-2"]
    ],
    link = "/link-to-post",
    featured_media = {
      alt: "anything",
      src:
        "https://www.territorysupply.com/wp-content/uploads/2019/11/utah-hot-springs-900x550.jpg"
    }
  } = data;

  return (
    <Link link={link} display="block" flex="1" {...props}>
      <SecondaryPostArticle
        bgImage={generateGradient()}
        role="group"
        // {...props}
      >
        <PostOverlay />
        {/* <PostLink link={link} /> */}
        <PostImage {...featured_media} />
        <PostContent padding="40px" textAlign="left" mt="0">
          <PostCategories justify="flex-start" categories={categories} />
          <PostTitle as="h2" mt="auto" pt="40px" fontSize="1.65rem">
            {title}
          </PostTitle>
        </PostContent>
      </SecondaryPostArticle>
    </Link>
  );
};

export const FeaturedPostSection = ({ data, ...props }) => (
  <Flex as="section" direction={{ base: "column", lg: "row" }} {...props}>
    <Box width={{ base: "100%", lg: "65%" }} flexGrow="1">
      <PrimaryPostPreview data={data[0]} />
    </Box>
    <Flex
      direction={{ base: "row", lg: "column" }}
      width={{ base: "100%", lg: "35%" }}
      flexGrow="1"
    >
      <SecondaryPostPreview data={data[1]} />
      <SecondaryPostPreview data={data[2]} />
    </Flex>
  </Flex>
);
