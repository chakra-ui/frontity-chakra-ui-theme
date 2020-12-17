import { Flex, Icon, Input } from "@chakra-ui/react";
import { connect } from "frontity";
import React from "react";
import useSearch from "../hooks/useSearch";

// A11y: Add a hidden search button
const SearchForm = props => {
  const { form, input } = useSearch(props);
  return (
    <Flex
      as="form"
      maxWidth="md"
      mx="auto"
      pos="relative"
      width="100%"
      height="80%"
      justifyContent="center"
      alignItems="center"
      {...form}
    >
      <Input
        placeholder="Type and Hit Enter"
        variant="flushed"
        size="lg"
        fontSize={{ base: "24px", md: "32px" }}
        height="auto"
        focusBorderColor="primary.400"
        py={{ base: 1, md: 3 }}
        {...input}
      />
      <Icon
        name="search"
        size="1.5rem"
        color="gray.400"
        position="absolute"
        right="0"
      />
    </Flex>
  );
};

export default connect(SearchForm);
