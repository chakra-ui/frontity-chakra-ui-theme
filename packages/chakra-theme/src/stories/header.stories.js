import React from "react";
import Header from "../components/header/header";
import Nav from "../components/header/nav";
import { Divider } from "@chakra-ui/core";

export default {
  title: "Header"
};

export const header = () => (
  <Header>
    <Divider marginY={0} borderColor="whiteAlpha.400" />
    <Nav />
  </Header>
);
