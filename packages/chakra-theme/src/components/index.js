import { CSSReset, ThemeProvider, theme, Box } from "@chakra-ui/core";
import { connect, Head } from "frontity";
import React from "react";
import Header from "./header";
import Archive from "./archive";
import Loading from "./loading";
import Page404 from "./page404.js";
import Post from "./post/post";
import Title from "./title";
import Footer from "./footer";
import SearchResults from "./search";

// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const parse = libraries.source.parse(state.router.link);
  // Check if the url is a search type
  const isSearch = Boolean(parse.query["s"]);

  return (
    <ThemeProvider
      theme={{ ...theme, fonts: { ...theme.fonts, heading: "Kelson" } }}
    >
      <CSSReset />
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add the header of the site. */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Box as="main" mt="70px">
        {(data.isFetching && <Loading />) ||
          (isSearch && <SearchResults />) ||
          (data.isArchive && <Archive />) ||
          (data.isPostType && <Post />) ||
          (data.is404 && <Page404 />)}
      </Box>

      <Footer />
    </ThemeProvider>
  );
};

export default connect(Theme);
