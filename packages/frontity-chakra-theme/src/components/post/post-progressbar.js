import { Progress } from "@chakra-ui/react";

const PostProgressBar = props => (
  <Progress
    pos="fixed"
    color="accent"
    top={{ base: "44px", md: "70px" }}
    height="4px"
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
