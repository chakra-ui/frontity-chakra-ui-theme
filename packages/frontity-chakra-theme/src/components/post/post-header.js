import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import PostCategories from "./post-categories";
import { formatDate } from "../helpers";
import { decode } from "frontity";

const PostHeader = ({
  heading,
  categories,
  description,
  author,
  date,
  isPage,
  ...props
}) => (
  <Box textAlign="center" {...props}>
    {categories && (
      <PostCategories
        color="black"
        categories={categories}
        justifyContent="center"
      />
    )}
    <Heading
      fontWeight="bold"
      size="2xl"
      mt="30px"
      mb={{ base: "20px", lg: "32px" }}
      textTransform="uppercase"
      dangerouslySetInnerHTML={{ __html: heading }}
    />
    {description && <Text mt={4}>{description}</Text>}
    {/* Don't show the author if we're on a page type */}
    {!isPage && author && (
      <Text fontSize="lg">
        by{" "}
        <Link fontWeight="bold" color="accent.400" link={author.link}>
          {decode(author.name)}
        </Link>
      </Text>
    )}
    {/* Don't show the date if we're on a page type */}
    {!isPage && date && (
      <Text fontSize="md" mt="12px">
        {formatDate(date)}
      </Text>
    )}
  </Box>
);

export default PostHeader;
