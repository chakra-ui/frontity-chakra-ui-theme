// import React from "react";
// import { useDisclosure, Stack } from "@chakra-ui/core";
// import MenuDrawer from "../components/header/menu-drawer";
// import MenuItem from "../components/header/menu-item";
// import Link from "../components/link";

// export default {
//   title: "Menu Drawer"
// };

// const menuLinks = [
//   ["Home", "/"],
//   ["Nature", "/category/nature/"],
//   ["Travel", "/category/travel/"],
//   ["Japan", "/tag/japan/"],
//   ["About Us", "/about-us/"]
// ];

// export const base = () => {
//   const { isOpen, onClose, onOpen } = useDisclosure(true);
//   return (
//     <>
//       <button onClick={onOpen}>Open</button>
//       <MenuDrawer isOpen={isOpen} onClose={onClose}>
//         <Stack mt="20%" spacing="3.2rem" direction="column" as="ul" ml="0">
//           {menuLinks.map(([name, link], index) => (
//             <MenuItem index={`0${index + 1}`} key={name}>
//               <Link link={link}>{name}</Link>
//             </MenuItem>
//           ))}
//         </Stack>
//       </MenuDrawer>
//     </>
//   );
// };
