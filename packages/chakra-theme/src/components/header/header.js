import { Box, Flex } from "@chakra-ui/core";
import React from "react";
import Link from "../link";
import Menu from "../menu";
import { isUrl } from "../helpers";

const SiteHeader = props => (
  <Box
    as="header"
    transition="transform ease .25s"
    width="100%"
    pos="fixed"
    top="0"
    left="0"
    bg="primary.700"
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

const Logo = ({ isImage = true, value }) =>
  isImage ? (
    <Box as="img" src={value} width="120px" />
  ) : (
    <Box
      fontSize="2xl"
      color="white"
      fontFamily="heading"
      textTransform="uppercase"
      fontWeight="bold"
    >
      {value}
    </Box>
  );

const SiteLogo = ({ isImage, src, ...props }) => (
  <Box display="block" flexShrink="0" {...props}>
    <Link link="/">
      <Logo isImage={isImage} value={src} />
    </Link>
  </Box>
);

const Header = ({ children, logoSrc, ...props }) => {
  // check if the logo is a url,
  // we assume, if it's a url, it points to an image, else it's a text
  const logoIsImage = isUrl(logoSrc);

  return (
    <SiteHeader {...props}>
      <SiteHeaderInner>
        <Menu />
        <SiteLogo isImage={logoIsImage} src={logoSrc} />
        {children}
      </SiteHeaderInner>
    </SiteHeader>
  );
};

export default Header;
