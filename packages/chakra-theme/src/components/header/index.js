import { Box, PseudoBox } from "@chakra-ui/core";
import { connect } from "frontity";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import MainHeader from "./header";
import Navigation from "./navigation";
import SocialNav from "./social-menu";

export const SearchButton = props => (
  <PseudoBox
    aria-label="Search this site"
    as="button"
    display="flex"
    alignItems="center"
    justifyContent="center"
    transition="background-color ease 0.25s"
    _hover={{ bg: "white" }}
    flexShrink="0"
    size="46px"
    bg="#eca419"
    ml={{ base: "auto", lg: "3rem" }}
    {...props}
  >
    <Box size={6} color="#333a35" as={IoIosSearch} />
  </PseudoBox>
);

const Header = ({ state }) => (
  <MainHeader>
    <Navigation menu={state.theme.menu} />
    <SocialNav menu={state.theme.socialLinks} />
    <SearchButton />
  </MainHeader>
);

export default connect(Header);
