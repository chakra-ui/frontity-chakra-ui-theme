import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import React from "react";

const Header = ({
  children,
  title = "Frontity + Chakra ⚡️",
  description = "This is the awesome theme that uses frontity and chakra",
  ...props
}) => {
  return (
    <Box
      bg="teal.600"
      overflowX="hidden"
      pos="relative"
      color="white"
      px={6}
      {...props}
    >
      <Flex
        minH={{ base: "140px", md: "200px" }}
        justify="center"
        direction="column"
        align={{ base: "flex-start", md: "center" }}
      >
        <Heading textTransform="uppercase">{title}</Heading>
        {description && (
          <Text mt={4} textAlign="center">
            {description}
          </Text>
        )}
      </Flex>
      {children}
    </Box>
  );
};

export default Header;
