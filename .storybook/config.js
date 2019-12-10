import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

addDecorator(story => (
  <ThemeProvider>
    <CSSReset />
    {story()}
  </ThemeProvider>
));

// automatically import all files ending in *.stories.js
configure(require.context("../packages", true, /\.stories\.js$/), module);
