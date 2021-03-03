import React from "react";
import { Alert, Text, Box, Heading } from "@chakra-ui/react";
import Link from "../link";

/**
 *
 * @param {React.ElementType} tag
 * @param {{props: (nodeProps: Object) => Object, component: React.ComponentType<any>}} options
 */
function makeProcessor(tag, options) {
  return {
    name: tag,
    test: ({ node }) => node.component === tag,
    processor: ({ node }) => {
      node.component = options.component || node.tag;
      node.props = { ...options.props({ node }), ...node.props };
      return node;
    },
    // allow for overriding this processors
    priority: 20
  };
}

const blockquote = makeProcessor("blockquote", {
  props: () => ({
    variant: "left-accent",
    status: "warning",
    marginY: "20px"
  }),
  component: Alert
});

const paragraph = makeProcessor("p", {
  props: ({ node }) => {
    // we don't want to add marginTop if the paragraph is nested in another component
    const hasParent = Boolean(node.parent);
    return {
      marginTop: hasParent ? "0" : "10px",
      fontSize: { base: "md", md: "lg" },
      lineHeight: "tall"
    };
  },
  component: Text
});

const figcaption = makeProcessor("figcaption", {
  props: () => ({
    as: "figcaption",
    fontSize: "1rem",
    marginTop: "20px",
    textAlign: "center",
    opacity: 0.8,
    marginBottom: "40px"
  }),
  component: Box
});

// make for h1, h2, h4, h5, h6
const h3 = makeProcessor("h3", {
  props: () => ({
    as: "h3",
    marginTop: "40px",
    fontSize: { base: "lg", md: "xl" },
    textTransform: "uppercase"
  }),
  component: Heading
});

const PostLink = ({ children, href, rel, ...props }) => (
  <Box
    as="span"
    fontWeight="medium"
    color="accent.400"
    _hover={{
      textDecoration: "underline"
    }}
    {...props}
  >
    <Link rel={rel} link={href}>
      {children}
    </Link>
  </Box>
);

const a = makeProcessor("a", {
  props: ({ node }) => node.props,
  component: PostLink
});

const processors = [blockquote, paragraph, figcaption, h3, a];
export default processors;
