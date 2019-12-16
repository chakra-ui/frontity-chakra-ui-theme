import { Box, Flex, PseudoBox } from "@chakra-ui/core";
import React from "react";
import Link from "../link";
import Logo from "./logo";
import { IoIosMenu } from "react-icons/io";

const SiteHeader = props => (
  <Box
    as="header"
    transition="transform ease .25s"
    width="100%"
    pos="fixed"
    top="0"
    left="0"
    bg="#333a35"
    zIndex="90"
    {...props}
  />
);

const SiteHeaderInner = props => (
  <Flex
    align="center"
    width="92%"
    mx="auto"
    height={{ sm: "70px" }}
    maxW="1550px"
    {...props}
  />
);

const SiteLogo = props => (
  <Box display="block" flexShrink="0" width="100px" {...props}>
    <Link link="/">
      <Logo />
    </Link>
  </Box>
);

const MenuButton = props => (
  <PseudoBox
    as="button"
    display={{ base: "flex", lg: "none" }}
    alignItems="center"
    justifyContent="center"
    flexShrink="0"
    mr={{ base: "auto", lg: "0" }}
    {...props}
  >
    <Box size={10} color="#eca419" as={IoIosMenu} />
  </PseudoBox>
);

const Header = ({ children, ...props }) => (
  <SiteHeader {...props}>
    <SiteHeaderInner>
      <MenuButton />
      <SiteLogo />
      {children}
    </SiteHeaderInner>
  </SiteHeader>
);

export default Header;
