import { Flex, Icon, Input } from "@chakra-ui/core";
import { connect } from "frontity";
import React from "react";
import useSearch from "../hooks/useSearch";

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
        fontSize="32px"
        height="auto"
        focusBorderColor="teal.500"
        py={3}
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
