import { Box } from "@chakra-ui/core";
import Image from "@frontity/components/image";
import { connect } from "frontity";
import React from "react";
import { getMediaAttributes } from "../helpers";

const FeaturedMedia = ({ state, id }) => {
  const imgProps = getMediaAttributes(state, id);
  return (
    <Box mt={4} height="300px">
      <Box as={Image} size="100%" objectFit="cover" {...imgProps} />
    </Box>
  );
};

export default connect(FeaturedMedia);
