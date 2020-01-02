import { Box, Flex, Heading } from "@chakra-ui/core";
import React from "react";
import { PostImageWithOverlay } from "../featured-post/components";
import Link from "../link";
import PostCategories from "../post/post-categories";

const PostPreview = ({ data, ...rest }) => {
  const { title, excerpt, featured_media, link, categories } = data;

  return (
    <Flex
      direction="column"
      position="relative"
      bg="white"
      as="article"
      shadow="md"
      {...rest}
    >
      <Link link={link}>
        <PostImageWithOverlay {...featured_media} />
      </Link>

      <Flex p="40px" flexGrow="1" direction="column">
        <Heading fontSize="2xl" as="h4" textTransform="uppercase">
          <Link link={link}>{title}</Link>
        </Heading>
        <Box
          my="20px"
          flex="1"
          color="#595753"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <PostCategories
          color="#000"
          justify="flex-start"
          categories={categories}
        />
      </Flex>
    </Flex>
  );
};

export default PostPreview;
