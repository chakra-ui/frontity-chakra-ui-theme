import { Avatar, Heading, Stack, Text } from "@chakra-ui/core";
import React from "react";

function AuthorBio({ state, storyData, isStorybook }) {
  const data = isStorybook ? storyData : state;

  return (
    <Stack maxWidth="700px" my={4} spacing={6} direction="row">
      <Avatar size="xl" src={data.gravatar} />
      <Stack spacing={3} direction="column">
        <Heading size="md">{data.name}</Heading>
        <Text>{data.description}</Text>
      </Stack>
    </Stack>
  );
}

export default AuthorBio;
