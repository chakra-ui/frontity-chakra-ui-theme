import { Box, Divider } from "@chakra-ui/core";
import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import List from "../archive";
import useScrollProgress from "../hooks/useScrollProgress";
import { LightPatternBox } from "../styles/pattern-box";
import Section from "../styles/section";
import AuthorBio from "./author-bio";
import FeaturedMedia from "./featured-media";
import PostHeader from "./post-header";
import PostProgressBar from "./post-progressbar";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  // Get the data of the post.
  const post = state.source[data.type][data.id];

  // Get the data of the author.
  const author = state.source.author[post.author];

  // Get a human readable date.
  // const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const allCategories = state.source.category;
  const categories =
    post.categories && post.categories.map(catId => allCategories[catId]);

  // Once the post has loaded in the DOM, prefetch both the
  // home posts and the list component so if the user visits
  // the home page, everything is ready and it loads instantly.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  const [ref, scroll] = useScrollProgress();

  // Load the post, but only if the data is ready.
  if (!data.isReady) return null;

  return (
    <LightPatternBox showPattern={state.theme.showBackgroundPattern} ref={ref}>
      <Box pb={{ base: "2rem", lg: "50px" }}>
        <PostHeader
          mt={{ base: "20px", lg: "4rem" }}
          px={{ base: "32px", md: "0" }}
          categories={categories}
          heading={post.title.rendered}
          author={author}
          date={post.date}
          isPage={data.isPage}
        />
      </Box>

      {!data.isPage && <PostProgressBar value={scroll} />}

      {/* Look at the settings to see if we should include the featured image */}
      <Section bg="white" pb="80px" size="lg">
        {post.featured_media != null && (
          <FeaturedMedia id={post.featured_media} />
        )}

        {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
        <Content
          as={Section}
          px={{ base: "32px", md: "0" }}
          size="md"
          pt="50px"
        >
          <Html2React html={post.content.rendered} />
        </Content>

        <Divider borderBottom="1px solid" my="80px" />

        <Section px={{ base: "32px", md: "0" }}>
          <AuthorBio
            image={author.avatar_urls["96"]}
            name={author.name}
            description={author.description}
            link={author.link}
          />
        </Section>
      </Section>
    </LightPatternBox>
  );
};

export default connect(Post);

// This component is the parent of the `content.rendered` HTML. We can use nested
// selectors to style that HTML.
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  ul {
    padding: 1rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;
  }

  iframe {
    display: block;
    margin: auto;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
