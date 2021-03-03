import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import { decode } from "frontity";

const AuthorBio = ({ image, description, name, link }) => (
  <Flex maxWidth="700px" my={4} direction={{ base: "column", md: "row" }}>
    <Avatar size="xl" src={image} />
    <Box boxSize={6} flexShrink="0" />
    <Box fontSize={{ base: "md", md: "lg" }}>
      <Text>
        by{" "}
        <Link
          link={link}
          fontWeight="bold"
          color="accent.400"
          _hover={{ textDecoration: "underline" }}
        >
          {decode(name)}
        </Link>
      </Text>
      {description && (
        <Text mt={6} dangerouslySetInnerHTML={{ __html: description }} />
      )}
    </Box>
  </Flex>
);

export default AuthorBio;
