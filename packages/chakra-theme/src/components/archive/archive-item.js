import { connect } from "frontity";
import React from "react";
import { formatPostData } from "../helpers";
import PostPreview from "./post-preview";

const ArchiveItem = ({ state, item }) => {
  const data = formatPostData(state, item);
  return <PostPreview data={data} />;
};

export default connect(ArchiveItem);
