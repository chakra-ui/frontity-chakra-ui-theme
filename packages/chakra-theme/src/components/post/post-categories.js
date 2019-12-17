import { PseudoBox, Stack } from "@chakra-ui/core";
import React from "react";
import Link from "../link";

export const PostCategory = props => (
  <PseudoBox
    transition="background-color ease 0.25s"
    px="5px"
    border="2px solid #eca419"
    fontFamily="heading"
    textTransform="uppercase"
    fontWeight="medium"
    display="inline-block"
    _hover={{
      bg: "#eca419",
      color: "white"
    }}
    {...props}
  />
);

export const PostCategories = ({ categories, color = "white", ...props }) => (
  <Stack direction="row" justify="center" mt="20px" {...props}>
    {categories.map(category => (
      <PostCategory color={color} key={category.id}>
        <Link link={category.link}>{category.name}</Link>
      </PostCategory>
    ))}
  </Stack>
);

export default PostCategories;
