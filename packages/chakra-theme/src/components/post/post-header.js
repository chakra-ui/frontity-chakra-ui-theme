import { Box, Heading, Text } from "@chakra-ui/core";
import React from "react";
import Link from "../link";
import PostCategories from "./post-categories";

const PostHeader = ({ heading, categories, description, author, ...props }) => (
  <Box textAlign="center" {...props}>
    {categories && <PostCategories color="#000" categories={categories} />}
    <Heading
      fontWeight="bold"
      size="2xl"
      mt="30px"
      mb={{ base: "20px", lg: "40px" }}
      textTransform="uppercase"
      dangerouslySetInnerHTML={{ __html: heading }}
    />
    {description && <Text mt={4}>{description}</Text>}
    {author && (
      <Text>
        by{" "}
        <Link fontWeight="bold" color="#eca419" link={author.link}>
          {author.name}
        </Link>
      </Text>
    )}
  </Box>
);

export default PostHeader;
