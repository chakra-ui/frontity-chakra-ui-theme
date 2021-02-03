import { Box } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { IoIosMenu } from "react-icons/io";

const MenuButton = forwardRef((props, ref) => (
  <Box
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
    <Box boxSize={10} color="accent.400" as={IoIosMenu} />
  </Box>
));

export default MenuButton;
