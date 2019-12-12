import { Box, PseudoBox } from "@chakra-ui/core";
import React from "react";
import { MdSearch } from "react-icons/md";

const SearchButton = props => (
  <PseudoBox
    as="button"
    aria-label="Search this blog"
    color="inherit"
    fontSize="24px"
    size="32px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    {...props}
  >
    <Box as={MdSearch} fontSize="1em" color="currentColor" />
  </PseudoBox>
);

export default SearchButton;
