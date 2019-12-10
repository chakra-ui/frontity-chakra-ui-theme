import React from "react";
import PostCategories from "../components/post/post-categories";
import PostHeader from "../components/post/post-header";

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
  />
);
