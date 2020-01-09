import React from "react";
import { Progress } from "@chakra-ui/core";

const PostProgressBar = props => (
  <Progress
    pos="fixed"
    color="accent"
    top="70px"
    height="6px"
    zIndex={2}
    width="100%"
    min={0}
    max={70}
    bg="transparent"
    css={theme => ({
      div: {
        backgroundColor: theme.colors.accent[400]
      }
    })}
    {...props}
  />
);

export default PostProgressBar;
