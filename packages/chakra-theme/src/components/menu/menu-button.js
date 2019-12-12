import { Box, PseudoBox } from "@chakra-ui/core";
import React, { forwardRef } from "react";
import { MdMenu } from "react-icons/md";

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

export default MenuButton;
