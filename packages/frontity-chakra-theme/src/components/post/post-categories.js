import { Box, PseudoBox, Flex } from "@chakra-ui/core";
import React from "react";
import Link from "../link";

export const PostCategory = props => (
  <PseudoBox
    transition="background-color ease 0.25s"
    px="5px"
    border="2px solid"
    borderColor="accent.400"
    fontFamily="heading"
    textTransform="uppercase"
    fontWeight="medium"
    display="inline-block"
    _hover={{
      bg: "accent.400",
      color: props.color
    }}
    {...props}
  />
);

export const PostCategories = ({
  categories,
  limit = 3,
  color = "white",
  ...props
}) => {
  const limitCategories =
    categories.length > limit
      ? categories.filter((_, idx) => idx < limit)
      : categories;

  return (
    <Flex flexWrap="wrap" mt="12px" {...props}>
      {limitCategories.map(category => (
        <PostCategory color={color} key={category.id} mr="6px" mb="6px">
          <Link
            link={category.link}
            dangerouslySetInnerHTML={{ __html: category.name }}
          />
        </PostCategory>
      ))}
    </Flex>
  );
};

export default PostCategories;
