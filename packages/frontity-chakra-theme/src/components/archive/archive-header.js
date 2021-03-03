import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { PatternBox, PatternBoxInner } from "../styles/pattern-box";

const ArchiveHeader = ({ taxonomy, title, ...props }) => (
  <PatternBox pb="80px" mb="-80px" {...props}>
    <PatternBoxInner>
      <Text textTransform="uppercase" color="#fff" fontWeight="bold">
        {taxonomy}
      </Text>
      <Heading
        mt="8px"
        textTransform="uppercase"
        fontSize={{ base: "5xl", md: "6xl" }}
        color="accent.400"
      >
        {title}
      </Heading>
    </PatternBoxInner>
  </PatternBox>
);

export default ArchiveHeader;
