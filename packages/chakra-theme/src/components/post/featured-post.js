import { Box, Heading, PseudoBox, Stack } from "@chakra-ui/core";
import { styled } from "frontity";
import React from "react";
import Link from "../link";

export const PrimaryPostPreview = ({
  title = "Where to Find utah's most relaxing hot springs",
  categories = [
    ["Category 1", "./cat-1"],
    ["Category 2", "./cat-2"]
  ],
  link = "/link-to-post",
  image = "https://www.territorysupply.com/wp-content/uploads/2019/11/utah-hot-springs-900x550.jpg",
  ...props
}) => (
  <PrimaryPostArticle bgImage={generateGradient()} role="group" {...props}>
    <PostOverlay />
    <PostLink link={link} />
    <PostImage src={image} />
    <PostContent>
      <PostTitle>{title}</PostTitle>
      <PostCategories categories={categories} />
    </PostContent>
  </PrimaryPostArticle>
);

export const SecondaryPostPreview = ({
  title = "Where to Find utah's most relaxing hot springs",
  categories = [
    ["Category 1", "./cat-1"],
    ["Category 2", "./cat-2"]
  ],
  link = "/link-to-post-2",
  image = "https://www.territorysupply.com/wp-content/uploads/2019/11/utah-hot-springs-900x550.jpg",
  ...props
}) => (
  <SecondaryPostArticle bgImage={generateGradient()} role="group" {...props}>
    <PostOverlay />
    <PostLink link={link} />
    <PostImage src={image} />
    <PostContent padding="40px" textAlign="left" mt="0">
      <PostCategories justify="flex-start" categories={categories} />
      <PostTitle as="h2" mt="auto" pt="40px" size="lg">
        {title}
      </PostTitle>
    </PostContent>
  </SecondaryPostArticle>
);

const PostLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const PostContent = props => (
  <Box
    p="40px"
    width="100%"
    display="flex"
    flexDirection="column"
    textTransform="uppercase"
    mt="auto"
    textAlign="center"
    color="white"
    zIndex="2"
    {...props}
  />
);

const PostTitle = props => (
  <Heading
    as="h1"
    size="2xl"
    pointerEvents="none"
    fontWeight="medium"
    position="relative"
    {...props}
  />
);

const PostOverlay = props => (
  <PseudoBox
    pointerEvents="none"
    zIndex={1}
    size="100%"
    position="absolute"
    top="0"
    left="0"
    background="rgba(0,0,0,0.4)"
    transition="background-color ease 0.25s"
    _groupHover={{
      background: "rgba(0,0,0,0.6)"
    }}
    {...props}
  />
);

const FeaturedPostCategory = props => (
  <PseudoBox
    transition="background-color ease 0.25s"
    color="white"
    px="5px"
    border="2px solid #eca419"
    fontFamily="heading"
    textTransform="uppercase"
    fontWeight="semibold"
    display="inline-block"
    _hover={{
      bg: "#eca419"
    }}
    {...props}
  />
);

const PostCategories = ({ categories, ...props }) => (
  <Stack direction="row" justify="center" mt="20px" {...props}>
    {categories.map(([name, link]) => (
      <FeaturedPostCategory key={name}>
        <Link link={link}>{name}</Link>
      </FeaturedPostCategory>
    ))}
  </Stack>
);

const PrimaryPostArticle = props => (
  <Box
    as="article"
    position="relative"
    display="flex"
    direction="column"
    alignItems="flex-end"
    minHeight={{ base: "unset", md: "calc(80vh)" }}
    height={{ base: "auto", md: "100%" }}
    paddingTop={{ base: "80px", md: "0" }}
    cursor="pointer"
    {...props}
  />
);

const SecondaryPostArticle = props => (
  <Box
    as="article"
    position="relative"
    display="flex"
    direction="column"
    flexGrow="1"
    cursor="pointer"
    minHeight={{ base: "unset", lg: "240px" }}
    {...props}
  />
);

const PostImage = props => (
  <PseudoBox
    as="img"
    width="900"
    height="550"
    alt="utah hot springs"
    position="absolute"
    size="100%"
    objectFit="cover"
    top="0"
    left="0"
    maxWidth="100%"
    {...props}
  />
);

function generateGradient() {
  var hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e"
  ];

  function populate(a) {
    for (var i = 0; i < 6; i++) {
      var x = Math.round(Math.random() * 14);
      var y = hexValues[x];
      a += y;
    }
    return a;
  }

  var newColor1 = populate("#");
  var newColor2 = populate("#");
  var angle = Math.round(Math.random() * 240);

  var gradient =
    "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

  return gradient;
}
