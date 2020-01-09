import { Box, PseudoBox } from "@chakra-ui/core";
import React from "react";
import Section from "./section";
import tileGreen from "../../assets/pattern-tile-green.svg";
import tileLight from "../../assets/pattern-tile-light-fade.svg";

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
export const PatternBox = props => (
  <Box
    as="section"
    bgImage={`url({${tileGreen}})`}
    bg="primary.700"
    bgSize="1018px"
    bgPos="top center"
    borderTop="10px solid"
    borderColor="accent.400"
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
    bg="accent.50"
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
      bgImage: `url(${tileLight})`
    }}
    {...props}
  />
));
