import React from "react";
import AuthorBio from "../components/post/author-bio";

const data = {
  name: "Mike Allen",
  description:
    "Mike is a student Web Designer and Developer living in Southampton, UK. Studying in his final year at Solent University, he is preparing to take on the world of Web Development. Reach out to him here.",
  gravatar: "https://uinames.com/api/photos/female/22.jpg"
};

export default {
  title: "Avatar"
};

export const base = () => <AuthorBio isStorybook storyData={data} />;
