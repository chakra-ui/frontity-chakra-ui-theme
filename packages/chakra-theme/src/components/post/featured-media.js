import { Box } from "@chakra-ui/core";
import Image from "@frontity/components/image";
import { connect } from "frontity";
import React from "react";
import { getMediaAttributes } from "../helpers";

// eslint-disable-next-line
const FeaturedMedia = ({ state, actions, libraries, id, ...props }) => {
  const imgProps = getMediaAttributes(state, id);
  return (
    <Box as="figure" mt={4} height="300px" {...props}>
      <Box as={Image} size="100%" objectFit="cover" {...imgProps} />
    </Box>
  );
};

export default connect(FeaturedMedia);
