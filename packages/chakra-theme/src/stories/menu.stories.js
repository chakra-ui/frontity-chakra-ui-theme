import React from "react";
import { useDisclosure } from "@chakra-ui/core";
import { MenuDrawer } from "../components/header/menu-drawer";

export default {
  title: "Menu Drawer"
};

export const base = () => {
  const disclosure = useDisclosure(true);
  return (
    <>
      <button onClick={disclosure.onOpen}>Open</button>
      <MenuDrawer
        isStorybook
        storyData={{
          ...disclosure,
          theme: {
            menu: [
              ["Home", "/"],
              ["Nature", "/category/nature/"],
              ["Travel", "/category/travel/"],
              ["Japan", "/tag/japan/"],
              ["About Us", "/about-us/"]
            ]
          }
        }}
      />
    </>
  );
};
