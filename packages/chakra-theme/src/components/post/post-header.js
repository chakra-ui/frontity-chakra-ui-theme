import { Avatar, Box, Flex, Heading, Stack, Text } from "@chakra-ui/core";
import React from "react";
import { IoIosCalendar, IoMdChatboxes } from "react-icons/io";
import PostCategories from "./post-categories";

const PostMeta = ({ icon, children, ...rest }) => (
  <Stack isInline align="center" color="gray.600" {...rest}>
    <Box as={icon} size={4} />
    <Text textTransform="capitalize" fontSize="sm">
      {children}
    </Text>
  </Stack>
);

const AvatarMeta = ({ src, children, ...rest }) => (
  <Stack isInline align="center" color="gray.600" {...rest}>
    <Avatar size="sm" src={src} />
    <Text textTransform="capitalize" fontSize="sm">
      {children}
    </Text>
  </Stack>
);

function PostHeader({
  heading,
  categories,
  description,
  author,
  noOfComments,
  publishDate,
  ...props
}) {
  return (
    <Flex direction="column" justify="center" textAlign="center" {...props}>
      <PostCategories categories={categories} />
      <Heading fontWeight="semibold" mt={2}>
        {heading}
      </Heading>
      {description && <Text mt={4}>{description}</Text>}
      <Stack mt={5} spacing={10} justify="center" isInline>
        {author && (
          <AvatarMeta src={author.imageUrl}> by {author.name}</AvatarMeta>
        )}
        {publishDate && <PostMeta icon={IoIosCalendar}>{publishDate}</PostMeta>}
        {noOfComments && (
          <PostMeta icon={IoMdChatboxes}>
            {noOfComments} {noOfComments > 1 ? "Comments" : "Comment"}
          </PostMeta>
        )}
      </Stack>
    </Flex>
  );
}

export default PostHeader;
