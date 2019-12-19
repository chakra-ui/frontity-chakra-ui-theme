import { Box, Heading, Text } from "@chakra-ui/core";
import React from "react";
import Link from "../link";
import PostCategories from "./post-categories";

function PostHeader({ heading, categories, description, author, ...props }) {
  return (
    <Box textAlign="center" {...props}>
      {categories && <PostCategories color="#000" categories={categories} />}
      <Heading
        fontWeight="medium"
        size="2xl"
        mt="30px"
        mb="40px"
        textTransform="uppercase"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      {description && <Text mt={4}>{description}</Text>}
      {author && (
        <Text>
          by{" "}
          <Box as="b" color="#eca419">
            <Link link={author.link}>{author.name}</Link>
          </Box>
        </Text>
      )}
    </Box>
  );
}

export default PostHeader;
