import React from "react";
import { connect } from "frontity";
import Nav, { NavItem } from "./nav";
import MainHeader from "./header";
import Menu from "../menu";
import Link from "../link";
import { Divider } from "@chakra-ui/core";
import { SearchButton, SearchForm, SearchModal } from "../search";

const Header = ({ state, actions }) => {
  const { isSearchModalOpen, menu } = state.theme;
  const { openSearchModal, closeSearchModal } = actions.theme;
  return (
    <>
      <MainHeader
        title={state.frontity.title}
        description={state.frontity.description}
      >
        <Divider borderColor="whiteAlpha.300" my="0" />
        <Nav>
          {menu.map(([name, link]) => (
            <NavItem key={name}>
              <Link link={link}>{name}</Link>
            </NavItem>
          ))}
          <SearchButton onClick={openSearchModal} />
          <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal}>
            <SearchForm />
          </SearchModal>
        </Nav>
        <Menu />
      </MainHeader>
    </>
  );
};

export default connect(Header);
