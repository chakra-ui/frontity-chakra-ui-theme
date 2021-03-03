import { Box } from "@chakra-ui/react";
import React from "react";
import Link from "../link";

const MenuItem = ({ index, children, mb, link, ...rest }) => (
  <Box as="li" listStyleType="none" mb={mb} {...rest}>
    <Link
      display="block"
      color="white"
      role="group"
      pos="relative"
      minH="40px"
      borderBottom="1px solid"
      borderColor="#ffffff14"
      _hover={{
        bg: "rgba(236, 164, 25, 0.14)",
        borderColor: "accent.400",
        color: "accent.400"
      }}
      _focus={{
        bg: "rgba(236, 164, 25, 0.14)",
        borderColor: "accent.400",
        color: "accent.400"
      }}
      transition="all 0.3s"
      padding="12px"
      link={link}
    >
      <Box
        as="span"
        pos="absolute"
        top="50%"
        transform="translateY(-50%)"
        fontSize="md"
        letterSpacing="-0.024"
        lineHeight="1.23"
      >
        {index}
      </Box>
      <Box
        paddingLeft={10}
        letterSpacing="-0.004em"
        lineHeight="1.39"
        fontWeight="medium"
        fontSize="24px"
        cursor="pointer"
      >
        {children}
      </Box>
    </Link>
  </Box>
);

export default MenuItem;
