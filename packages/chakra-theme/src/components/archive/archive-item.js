import { Heading } from "@chakra-ui/core";
import { connect, styled } from "frontity";
import React from "react";
import { formatPostData } from "../helpers";
import Link from "../link";
import FeaturedMedia from "../post/featured-media";
import PostPreview from "./post-preview";

const ArchiveItem = ({ state, item }) => {
  const date = new Date(item.date);
  const data = formatPostData(state, item);

  return <PostPreview data={data} />;
};

export default connect(ArchiveItem);
