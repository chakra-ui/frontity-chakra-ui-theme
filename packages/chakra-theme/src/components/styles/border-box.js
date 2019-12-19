import React from "react";
import { Box } from "@chakra-ui/core";

/**
 * A Box with accented top border
 * @param {React.ComponentProps<typeof Box>} props
 */
const BorderBox = props => (
  <Box p="40px" bg="#ede4d3" borderTop="4px solid #eca419" {...props} />
);

export default BorderBox;
