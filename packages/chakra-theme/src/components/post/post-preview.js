import { Flex, Heading, Text } from "@chakra-ui/core";
import React from "react";
import { PostImageWithOverlay } from "../featured-post/components";
import Link from "../link";
import PostCategories from "./post-categories";

const PostPreview = ({
  title,
  description,
  image,
  link,
  categories,
  ...rest
}) => (
  <Flex
    direction="column"
    position="relative"
    bg="white"
    as="article"
    shadow="md"
    {...rest}
  >
    <PostImageWithOverlay src={image.src} alt={image.alt} />

    <Flex p="40px" flexGrow="1" direction="column">
      <Heading fontSize="2xl" as="h4" textTransform="uppercase">
        <Link link={link}>{title}</Link>
      </Heading>
      <Text mt="20px" color="#595753">
        {description}
      </Text>
      <PostCategories
        color="#000"
        justify="flex-start"
        categories={categories}
      />
    </Flex>
  </Flex>
);

export default PostPreview;
