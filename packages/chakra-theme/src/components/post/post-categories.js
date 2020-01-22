import { PseudoBox, Stack } from "@chakra-ui/core";
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
    <Stack
      direction="row"
      justify="center"
      mt="12px"
      flexWrap="wrap"
      {...props}
    >
      {limitCategories.map(category => (
        <PostCategory marginTop="8px" color={color} key={category.id}>
          <Link
            link={category.link}
            dangerouslySetInnerHTML={{ __html: category.name }}
          />
        </PostCategory>
      ))}
    </Stack>
  );
};

export default PostCategories;
