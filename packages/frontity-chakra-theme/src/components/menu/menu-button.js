import { Box, PseudoBox } from "@chakra-ui/core";
import React, { forwardRef } from "react";
import { IoIosMenu } from "react-icons/io";

const MenuButton = forwardRef((props, ref) => (
  <PseudoBox
    ref={ref}
    as="button"
    display={{ base: "flex", lg: "none" }}
    alignItems="center"
    justifyContent="center"
    flexShrink="0"
    mr={{ base: "auto", lg: "0" }}
    ml={{ base: "12px", sm: "0" }}
    {...props}
  >
    <Box size={10} color="accent.400" as={IoIosMenu} />
  </PseudoBox>
));

export default MenuButton;
