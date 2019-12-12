import React, { forwardRef } from "react";
import {
  Box,
  Flex,
  PseudoBox,
  Stack,
  useDisclosure,
  Modal,
  ModalContent,
  ModalCloseButton,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from "@chakra-ui/core";
import { MdSearch } from "react-icons/md";

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

const SearchModal = props => (
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

const SearchForm = forwardRef((props, ref) => (
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

const Nav = props => {
  const { isOpen, onOpen, onClose } = useDisclosure(true);
  return (
    <Stack
      direction="row"
      align="center"
      as="nav"
      py={3}
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
