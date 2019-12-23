import React from "react";
import { Progress } from "@chakra-ui/core";

const PostProgressBar = props => (
  <Progress
    pos="fixed"
    color="orange"
    top="70px"
    height="6px"
    zIndex={2}
    width="100%"
    min={0}
    max={70}
    bg="transparent"
    css={{
      div: {
        backgroundColor: "#eca419"
      }
    }}
    {...props}
  />
);

export default PostProgressBar;
