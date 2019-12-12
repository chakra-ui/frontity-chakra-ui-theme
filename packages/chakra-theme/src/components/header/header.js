import React, { forwardRef } from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  PseudoBox,
  useDisclosure,
  Stack
} from "@chakra-ui/core";
import { MdMenu } from "react-icons/md";
import MenuDrawer from "./menu-drawer";
import MenuItem from "./menu-item";
import Link from "../link";

const MenuButton = forwardRef((props, ref) => (
  <PseudoBox
    ref={ref}
    as="button"
    aria-label="Click to open menu"
    pos="absolute"
    top="24px"
    right="24px"
    {...props}
  >
    <Box as={MdMenu} focusable="false" color="currentColor" size="32px" />
  </PseudoBox>
));

const menuLinks = [
  ["Home", "/"],
  ["Nature", "/category/nature/"],
  ["Travel", "/category/travel/"],
  ["Japan", "/tag/japan/"],
  ["About Us", "/about-us/"]
];

const Header = ({ children, ...props }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box bg="teal.600" pos="relative" color="white" px={6} {...props}>
      <Flex
        minH={{ sm: "140px", md: "200px" }}
        justify="center"
        direction="column"
        align={{ sm: "flex-start", md: "center" }}
      >
        <Heading textTransform="uppercase">Frontity + Chakra ⚡️</Heading>
        <Text mt={4} textAlign="center">
          This is the awesome theme that uses frontity and chakra
        </Text>
      </Flex>

      {children}

      <MenuButton onClick={onOpen} />
      <MenuDrawer isOpen={isOpen} onClose={onClose}>
        <Stack mt="20%" spacing="3.2rem" direction="column" as="ul" ml="0">
          {menuLinks.map(([name, link], index) => (
            <MenuItem index={`0${index + 1}`} key={name}>
              <Link link={link}>{name}</Link>
            </MenuItem>
          ))}
        </Stack>
      </MenuDrawer>
    </Box>
  );
};

export default Header;
