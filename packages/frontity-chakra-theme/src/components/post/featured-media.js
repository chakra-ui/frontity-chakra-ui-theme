import { Box } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import { connect } from "frontity";
import React from "react";
import { getMediaAttributes } from "../helpers";

// eslint-disable-next-line
const FeaturedMedia = ({ state, actions, libraries, id, ...props }) => {
  const imgProps = getMediaAttributes(state, id);

  // is empty if the id doesn't exist in state.source anymore
  const noImgProps = Object.keys(imgProps).length === 0;

  if (noImgProps) return null;

  return (
    <Box as="figure" mt={4} height="500px" {...props}>
      <Box as={Image} boxSize="100%" objectFit="cover" {...imgProps} />
    </Box>
  );
};

export default connect(FeaturedMedia);
