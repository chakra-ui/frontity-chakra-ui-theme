import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";

addDecorator(story => (
  <ThemeProvider
    theme={{
      ...theme,
      fonts: { ...theme.fonts, body: "Inter", heading: "Inter" }
    }}
  >
    <CSSReset />
    {story()}
  </ThemeProvider>
));

// automatically import all files ending in *.stories.js
configure(require.context("../packages", true, /\.stories\.js$/), module);
