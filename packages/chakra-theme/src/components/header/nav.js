import { PseudoBox, Stack, useDisclosure } from "@chakra-ui/core";
import React from "react";
import { SearchButton, SearchModal, SearchForm } from "./search";

const NavLink = props => (
  <PseudoBox
    fontWeight="medium"
    fontFamily="body"
    fontSize="md"
    transition="all 0.3s"
    textAlign="center"
    cursor="pointer"
    opacity={0.8}
    _hover={{ color: "#fd5", opacity: 1 }}
    {...props}
  />
);

const Nav = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      direction="row"
      align="center"
      as="nav"
      py={3}
      px={6}
      width="full"
      justify="center"
      role="navigation"
      spacing={16}
      {...props}
    >
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
      <NavLink>Welcome</NavLink>

      <SearchButton onClick={onOpen} />
      <SearchModal isOpen={isOpen} onClose={onClose}>
        <SearchForm />
      </SearchModal>
    </Stack>
  );
};

export default Nav;
