import { Box } from "@chakra-ui/react";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchButton = props => (
  <Box
    aria-label="Search this site"
    as="button"
    display="flex"
    alignItems="center"
    justifyContent="center"
    transition="background-color ease 0.25s"
    _hover={{ bg: "white" }}
    flexShrink="0"
    boxSize="46px"
    bg="accent.400"
    ml={{ base: "auto", lg: "3rem" }}
    {...props}
  >
    <Box boxSize={6} color="primary.700" as={IoIosSearch} />
  </Box>
);

export default SearchButton;
