import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/core";
import React from "react";

function MenuDrawer({ children, ...props }) {
  return (
    <Drawer preserveScrollBarGap size="sm" placement="right" {...props}>
      <DrawerOverlay />
      <DrawerContent bg="teal.600" px={8} max="auto">
        <DrawerCloseButton color="white" />
        {children}
      </DrawerContent>
    </Drawer>
  );
}

export default MenuDrawer;
