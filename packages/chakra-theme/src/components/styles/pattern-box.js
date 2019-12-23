import { Box, PseudoBox } from "@chakra-ui/core";
import React from "react";
import Section from "./section";

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
export const PatternBox = props => (
  <Box
    as="section"
    bgImage={`url("https://www.territorysupply.com/wp-content/themes/territory-supply/assets/img/graphics/pattern-tile-green.svg")`}
    bg="#333a35"
    bgSize="1018px"
    bgPos="top center"
    borderTop="10px solid #eca419"
    {...props}
  />
);

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
export const PatternBoxInner = props => (
  <Section
    py="80px"
    position="relative"
    zIndex="1"
    overflow="hidden"
    textAlign="center"
    size="sm"
    px={6}
    {...props}
  />
);

export const LightPatternBox = React.forwardRef((props, ref) => (
  <PseudoBox
    ref={ref}
    bg="#ede4d3"
    pt="40px"
    pos="relative"
    zIndex={0}
    _before={{
      content: `""`,
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      display: "block",
      opacity: 0.4,
      bgSize: "1018px",
      bgPos: "top center",
      bgImage: `url(https://www.territorysupply.com/wp-content/themes/territory-supply/assets/img/graphics/pattern-tile-light-fade.svg)`
    }}
    {...props}
  />
));
