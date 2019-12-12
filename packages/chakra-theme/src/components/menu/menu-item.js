import { Box, PseudoBox } from "@chakra-ui/core";
import React from "react";

function MenuItem({ index, children, mb }) {
  return (
    <Box color="white" listStyleType="none" as="li" pos="relative" mb={mb}>
      <Box
        as="span"
        pos="absolute"
        top="0.5rem"
        fontSize="md"
        letterSpacing="-0.024"
        lineHeight="1.23"
      >
        {index}
      </Box>
      <PseudoBox
        display="inline-block"
        paddingLeft={10}
        letterSpacing="-0.004em"
        lineHeight="1.39"
        fontWeight="medium"
        fontSize="24px"
        cursor="pointer"
        _hover={{
          textDecoration: "underline"
        }}
      >
        {children}
      </PseudoBox>
    </Box>
  );
}

export default MenuItem;
