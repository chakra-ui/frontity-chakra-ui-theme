import { Avatar, Box, Heading, Stack, Text } from "@chakra-ui/core";
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
    <Avatar size="xs" src={src} />
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
    <Box {...props}>
      {categories && <PostCategories categories={categories} />}
      <Heading
        fontWeight="medium"
        size="2xl"
        mt={6}
        mb={2}
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      {description && <Text mt={4}>{description}</Text>}
      <Stack mt={5} spacing={10} isInline>
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
    </Box>
  );
}

export default PostHeader;
