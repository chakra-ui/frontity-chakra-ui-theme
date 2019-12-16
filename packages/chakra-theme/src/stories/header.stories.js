import React from "react";
import MainHeader from "../components/header/header";
import Navigation from "../components/header/navigation";
import SocialLinks from "../components/header/social-menu";
import { SearchButton } from "../components/header";

export default {
  title: "Header"
};

const menu = [
  ["Home", "/"],
  ["Nature", "/category/nature/"],
  ["Travel", "/category/travel/"],
  ["Japan", "/tag/japan/"],
  ["About Us", "/about-us/"]
];

const socialLinks = [
  ["pinterest", "https://www.instagram.com/territory.supply/"],
  ["facebook", "https://www.instagram.com/territory.supply/"],
  ["twitter", "https://www.pinterest.com/territorysupplyco/"]
];

export const header = () => (
  <MainHeader>
    <Navigation menu={menu} />
    <SocialLinks menu={socialLinks} />
    <SearchButton />
  </MainHeader>
);
