import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Box,
  Stack,
  DrawerCloseButton,
  PseudoBox
} from "@chakra-ui/core";
import { connect } from "frontity";
import Link from "../link";

function MenuItem({ index, children, mb }) {
  return (
    <Box color="white" listStyleType="none" as="li" pos="relative" mb={mb}>
      <Box
        as="span"
        pos="absolute"
        top="0.5rem"
        fontSize="md"
        letterSpacing="-0.024"
        lineHeight="1.23"
      >
        {index}
      </Box>
      <PseudoBox
        display="inline-block"
        paddingLeft={10}
        letterSpacing="-0.004em"
        lineHeight="1.39"
        fontWeight="medium"
        fontSize="24px"
        cursor="pointer"
        _hover={{
          textDecoration: "underline"
        }}
      >
        {children}
      </PseudoBox>
    </Box>
  );
}

export function MenuDrawer({ state, actions, storyData, isStorybook }) {
  const _isOpen = isStorybook ? storyData.isOpen : state.theme.isMenuOpen;
  const _onClose = isStorybook ? storyData.onClose : actions.theme.closeMenu;
  const _theme = isStorybook ? storyData.theme : state.theme;

  return (
    <Drawer size="sm" placement="right" isOpen={_isOpen} onClose={_onClose}>
      <DrawerOverlay />
      <DrawerContent bg="#323e3c" px={8} max="auto">
        <DrawerCloseButton color="white" />
        <Stack mt="20%" spacing="3.2rem" direction="column" as="ul" ml="0">
          {_theme.menu.map(([name, link], index) => (
            <MenuItem index={`0${index + 1}`} key={name}>
              <Link link={link}>{name}</Link>
            </MenuItem>
          ))}
        </Stack>
      </DrawerContent>
    </Drawer>
  );
}

export default connect(MenuDrawer);
