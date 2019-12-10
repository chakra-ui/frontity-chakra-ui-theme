import { Box, PseudoBox, Stack, VisuallyHidden } from "@chakra-ui/core";
import React from "react";
import Link from "../link";

const Category = props => (
  <PseudoBox
    textTransform="uppercase"
    transition="all 0.2s"
    fontWeight="semibold"
    letterSpacing="wide"
    _hover={{ color: "blue.300", textDecoration: "underline" }}
    fontSize="sm"
    {...props}
  />
);

const PostCategories = ({ categories }) => {
  // Remove empty or undefined categories
  const postCategories = categories.filter(Boolean);

  if (postCategories.length === 0) return null;

  return (
    <Box>
      <VisuallyHidden>Categories</VisuallyHidden>

      <Stack spacing={5} isInline justify="center">
        {postCategories.map(category => (
          <Category key={category.id}>
            <Link link={category.link}>{category.name}</Link>
          </Category>
        ))}
      </Stack>
    </Box>
  );
};

export default PostCategories;
