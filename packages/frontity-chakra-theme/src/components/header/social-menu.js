import { Box, VisuallyHidden } from "@chakra-ui/react";
import React from "react";
import { SiteMenu } from "./navigation";
import {
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoFacebook,
  IoLogoInstagram
} from "react-icons/io";
import Link from "../link";

// warning for showSocialLinks and menu.length
export const SocialMenu = ({ menu, ...props }) => (
  <SiteMenu spacing="30px" ml="24px" position={{ sm: "relative" }} {...props}>
    {menu.map(([name, link]) => {
      const SocialIcon = icons[name];
      return (
        <SocialMenuItem key={name} label={name} link={link} icon={SocialIcon} />
      );
    })}
  </SiteMenu>
);

const SocialMenuItem = ({ icon, label, link, ...props }) => (
  <Box
    color="accent.400"
    transition="all 0.3s"
    _hover={{ color: "white" }}
    as="li"
    listStyleType="none"
    margin="0"
    {...props}
  >
    <Link link={link}>
      <Box as={icon} boxSize="24px" />
    </Link>
    <VisuallyHidden>{label}</VisuallyHidden>
  </Box>
);

const icons = {
  twitter: IoLogoTwitter,
  pinterest: IoLogoPinterest,
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram
};

const SocialNav = ({ menu, ...props }) => (
  <Box ml="auto" display={{ base: "none", lg: "block" }} {...props}>
    <SocialMenu menu={menu} />
  </Box>
);

export default SocialNav;
