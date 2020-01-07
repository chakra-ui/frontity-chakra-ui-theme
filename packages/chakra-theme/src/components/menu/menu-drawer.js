import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/core";
import React from "react";

function MenuDrawer({ children, ...props }) {
  return (
    <Drawer preserveScrollBarGap size="sm" placement="left" {...props}>
      <DrawerOverlay />
      <DrawerContent bg="primary.700" px={8} max="auto">
        <DrawerCloseButton color="white" />
        {children}
      </DrawerContent>
    </Drawer>
  );
}

export default MenuDrawer;
