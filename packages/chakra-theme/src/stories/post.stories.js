import React from "react";
import PostCategories from "../components/post/post-categories";
import PostHeader from "../components/post/post-header";
import {
  FeaturedPostSection,
  PrimaryPostPreview,
  SecondaryPostPreview
} from "../components/featured-post";
import { Newsletter } from "../components/newsletter";
import { header as ComposedHeader } from "./header.stories";
import { Box } from "@chakra-ui/core";

const data = {
  categories: [
    { id: 0, link: "www.google.com", name: "Aside" },
    { id: 1, link: "www.google.com", name: "Travel" },
    { id: 2, link: "www.google.com", name: "Life" }
  ],
  heading:
    "Minimalist Design and Material Elements Are Central To Frama’s Copenhagen Residence",
  description:
    "Mike is a student Web Designer and Developer living in Southampton, UK.",
  author: "Sage Adebayo"
};

export default {
  title: "Post"
};

export const postCategories = () => (
  <PostCategories categories={data.categories} />
);

export const postHeader = () => (
  <PostHeader
    categories={data.categories}
    heading={data.heading}
    description={data.description}
    maxWidth="700px"
    mx="auto"
    publishDate="August 2019"
    noOfComments={3}
    author={{
      name: "Theresa Black",
      imageUrl: "https://uinames.com/api/photos/female/3.jpg"
    }}
  />
);

export const primaryPostPreview = () => <PrimaryPostPreview />;
export const secondaryPostPreview = () => <SecondaryPostPreview />;

const sampleData = [
  {
    title: "Where to Find utah's most relaxing hot springs",
    categories: [
      ["Chilling", "./cat-1"],
      ["Tourism", "./cat-2"]
    ],
    link: "/link-to-post-2",
    image:
      "https://www.territorysupply.com/wp-content/uploads/2019/11/utah-hot-springs-900x550.jpg"
  },
  {
    title: "Crown Jewels: 14 Majestic Hikes in Glacier National Park",
    categories: [
      ["Hiking", "./cat-1"],
      ["Parks", "./cat-2"]
    ],
    link: "/link-to-post-2",
    image:
      "https://www.territorysupply.com/wp-content/uploads/2019/10/best-hikes-glacier-national-park-900x550.jpg"
  },
  {
    title: "The Upper Peninsula’s Coolest Cabin and Cottage Rentals",
    categories: [["Michigan", "./cat-1"]],
    link: "/link-to-post-2",
    image:
      "https://www.territorysupply.com/wp-content/uploads/2019/11/michigan-upper-peninsula-cabin-rentals-900x550.jpg"
  }
];

export const newsletter = () => <Newsletter />;

export const composed = () => (
  <>
    <ComposedHeader />
    <FeaturedPostSection mt="70px" data={sampleData} />
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="320px"
    >
      Show the all posts here with pagination
    </Box>
    <Newsletter />
  </>
);
