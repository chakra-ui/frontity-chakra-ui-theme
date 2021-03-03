import { Stack, Box } from "@chakra-ui/react";
import { connect } from "frontity";
import React, { useRef } from "react";
import MenuButton from "./menu-button";
import MenuDrawer from "./menu-drawer";
import MenuItem from "./menu-item";
import { SocialMenu } from "../header/social-menu";

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
        <Stack mt="20%" spacing={6} direction="column" as="ul" ml="0">
          {state.theme.menu.map(([name, link], index) => (
            <MenuItem link={link} key={name} index={`0${index + 1}`}>
              {name}
            </MenuItem>
          ))}
        </Stack>

        {state.theme.showSocialLinks && (
          <Box marginTop={10} paddingY={5}>
            <SocialMenu ml="0" menu={state.theme.socialLinks} />
          </Box>
        )}
      </MenuDrawer>
    </>
  );
};

export default connect(Menu);
