import React from "react";
import { Heading, Text, Flex } from "@chakra-ui/core";
import PostCategories from "./post-categories";

function PostHeader({ heading, categories, description, author, ...props }) {
  return (
    <Flex direction="column" justify="center" textAlign="center" {...props}>
      <PostCategories categories={categories} />
      <Heading fontWeight="light" mt={2}>
        {heading}
      </Heading>
      {description && <Text mt={4}>{description}</Text>}
      {author && (
        <Text
          mt={4}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="semibold"
        >
          By {author}
        </Text>
      )}
    </Flex>
  );
}

export default PostHeader;
