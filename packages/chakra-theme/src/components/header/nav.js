import { Flex, PseudoBox } from "@chakra-ui/core";
import React from "react";

export const NavItem = props => (
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
  return (
    <Flex
      as="nav"
      role="navigation"
      py={3}
      // px={3}
      width="full"
      align="center"
      justify="space-between"
      maxWidth={{ sm: "100%", md: "640px" }}
      mx="auto"
      {...props}
    >
      {props.children}
    </Flex>
  );
};

export default Nav;
