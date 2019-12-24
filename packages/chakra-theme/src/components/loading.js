import { Box, Spinner } from "@chakra-ui/core";
import React from "react";

const Loading = () => (
  <Box
    width="800px"
    mx="auto"
    p="24px"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Spinner size="xl" color="#eca419" />
  </Box>
);

export default Loading;
