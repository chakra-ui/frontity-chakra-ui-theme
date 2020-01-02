import { Box, Flex } from "@chakra-ui/core";
import React from "react";
import Link from "../link";
import Menu from "../menu";

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
      <Box
        as="img"
        src="https://uploads-ssl.webflow.com/5be00771820599586e6bd032/5be0223588110a6dbcac2d05_image.svg"
        width="120px"
      />
    </Link>
  </Box>
);

const Header = ({ children, ...props }) => (
  <SiteHeader {...props}>
    <SiteHeaderInner>
      <Menu />
      <SiteLogo />
      {children}
    </SiteHeaderInner>
  </SiteHeader>
);

export default Header;
