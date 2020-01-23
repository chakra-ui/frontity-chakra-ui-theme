import { Box, PseudoBox } from "@chakra-ui/core";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchButton = props => (
  <PseudoBox
    aria-label="Search this site"
    as="button"
    display="flex"
    alignItems="center"
    justifyContent="center"
    transition="background-color ease 0.25s"
    _hover={{ bg: "white" }}
    flexShrink="0"
    size="46px"
    bg="accent.400"
    ml={{ base: "auto", lg: "3rem" }}
    {...props}
  >
    <Box size={6} color="primary.700" as={IoIosSearch} />
  </PseudoBox>
);

export default SearchButton;
