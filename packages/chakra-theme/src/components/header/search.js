import {
  Box,
  Flex,
  Icon,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  PseudoBox
} from "@chakra-ui/core";
import React, { forwardRef } from "react";
import { MdSearch } from "react-icons/md";

export const SearchButton = props => (
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

export const SearchModal = props => (
  <Modal {...props}>
    <ModalContent
      width="100vw"
      my="0"
      maxWidth="100%"
      height="100vh"
      bg="white"
    >
      {props.children}
      <ModalCloseButton />
    </ModalContent>
  </Modal>
);

export const SearchForm = forwardRef((props, ref) => (
  <Flex
    as="form"
    maxWidth="md"
    mx="auto"
    pos="relative"
    width="100%"
    height="80%"
    justifyContent="center"
    alignItems="center"
  >
    <Input
      ref={ref}
      placeholder="Type and Hit Enter"
      variant="flushed"
      size="lg"
      fontSize="32px"
      height="auto"
      focusBorderColor="teal.500"
      py={3}
      {...props}
    />
    <Icon
      name="search"
      size="1.5rem"
      color="gray.400"
      position="absolute"
      right="0"
    />
  </Flex>
));
