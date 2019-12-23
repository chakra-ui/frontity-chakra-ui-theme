import { Avatar, Box, Stack, Text } from "@chakra-ui/core";
import React from "react";
import Link from "../link";

const AuthorBio = ({ image, description, name, link }) => (
  <Stack maxWidth="700px" my={4} spacing={6} direction="row">
    <Avatar size="xl" src={image} />
    <Box>
      <Text fontSize="md">
        by{" "}
        <Link
          link={link}
          fontWeight="bold"
          color="#eca419"
          _hover={{ textDecoration: "underline" }}
        >
          {name}
        </Link>
      </Text>
      {description && (
        <Text mt={6} dangerouslySetInnerHTML={{ __html: description }} />
      )}
    </Box>
  </Stack>
);

export default AuthorBio;
