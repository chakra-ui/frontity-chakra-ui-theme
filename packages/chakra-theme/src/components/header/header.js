import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/core";

const Header = ({ children, ...props }) => {
  return (
    <Box bg="gray.900" color="white" {...props}>
      <Flex
        minH="200px"
        justify="center"
        direction="column"
        alignItems="center"
      >
        <Heading textTransform="uppercase">Frontity + Chakra</Heading>
        <Text mt={4} textAlign="center">
          This is the awesome theme that uses frontity and chakra
        </Text>
      </Flex>
      {children}
    </Box>
  );
};

export default Header;
