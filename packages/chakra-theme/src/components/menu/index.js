import { Stack } from "@chakra-ui/core";
import { connect } from "frontity";
import React, { useRef } from "react";
import Link from "../link";
import MenuButton from "./menu-button";
import MenuDrawer from "./menu-drawer";
import MenuItem from "./menu-item";

const Menu = ({ state, actions }) => {
  const { isMobileMenuOpen } = state.theme;
  const { openMobileMenu, closeMobileMenu } = actions.theme;
  const buttonRef = useRef();
  return (
    <>
      <MenuButton ref={buttonRef} onClick={openMobileMenu} />

      <MenuDrawer
        finalFocusRef={buttonRef}
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      >
        <Stack mt="20%" spacing="3.2rem" direction="column" as="ul" ml="0">
          {state.theme.menu.map(([name, link], index) => (
            <MenuItem index={`0${index + 1}`} key={name}>
              <Link link={link}>{name}</Link>
            </MenuItem>
          ))}
        </Stack>
      </MenuDrawer>
    </>
  );
};

export default connect(Menu);
