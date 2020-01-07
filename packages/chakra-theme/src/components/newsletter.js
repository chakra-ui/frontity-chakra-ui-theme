import React from "react";
import { Box, Heading, Text, PseudoBox, Flex } from "@chakra-ui/core";
import { IoIosArrowRoundForward } from "react-icons/io";

export const PatternBox = props => (
  <Box
    as="section"
    bgImage={`url("https://www.territorysupply.com/wp-content/themes/territory-supply/assets/img/graphics/pattern-tile-green.svg")`}
    bg="primary.700"
    bgSize="1018px"
    bgPos="top center"
    borderTop="10px solid"
    borderColor="accent.400"
    {...props}
  />
);

export const PatternBoxInner = props => (
  <Box
    py="80px"
    position="relative"
    zIndex="1"
    overflow="hidden"
    textAlign="center"
    maxW="640px"
    mx="auto"
    px={6}
    {...props}
  />
);

export const Newsletter = props => (
  <PatternBox {...props}>
    <Box
      py="80px"
      position="relative"
      zIndex="1"
      overflow="hidden"
      textAlign="center"
      maxW="640px"
      mx="auto"
      px={6}
    >
      <Heading color="white" textTransform="uppercase">
        Never miss an update!
      </Heading>
      <Text mt={4} fontSize="xl" color="accent.400">
        Receive the latest framework releases, new features, blog posts and
        tutorials.
      </Text>
      <SubscribeForm />
    </Box>
  </PatternBox>
);

const SubscribeInput = props => (
  <PseudoBox
    as="input"
    width="100%"
    display="block"
    bg="white"
    height="60px"
    border="none"
    px="15px"
    fontSize="1.125rem"
    placeholder="Subscribe to our newsletter"
    _placeholder={{ color: "gray.500" }}
    {...props}
  />
);

const SubscribeButton = props => (
  <PseudoBox
    as="button"
    transition="background-color ease .25s"
    bg="white"
    fontSize={{ base: "1.625rem" }}
    cursor="pointer"
    textAlign="center"
    color="accent.400"
    flexShrink="0"
    height="60px"
    minWidth="60px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    _hover={{
      bg: "accent.400",
      color: "white"
    }}
    _focus={{
      bg: "accent.400",
      color: "white"
    }}
    {...props}
  >
    <Box
      focusable="false"
      width="40px"
      height="auto"
      as={IoIosArrowRoundForward}
    />
  </PseudoBox>
);

const SubscribeForm = props => (
  <Flex as="form" mt="40px" {...props}>
    <SubscribeInput />
    <SubscribeButton />
  </Flex>
);
