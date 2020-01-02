import { Box, CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { connect, Head } from "frontity";
import React from "react";
import Archive from "./archive";
import Footer from "./footer";
import Header from "./header";
import Loading from "./loading";
import Page404 from "./page404.js";
import Post from "./post/post";
import SearchResults from "./search";
import Title from "./title";

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
      theme={{
        ...theme,
        fonts: { ...theme.fonts, heading: "Kelson" },
        colors: {
          ...theme.colors,
          brand: {
            50: "#fff6dc",
            100: "#fbe3b2",
            200: "#f6d086",
            300: "#f1be58",
            400: "#edab2b",
            500: "#d49212",
            600: "#a5710b",
            700: "#775105",
            800: "#483100",
            900: "#1d0f00"
          }
        }
      }}
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
      <Box as="main" mt="70px" minH="calc(100vh - 320px)">
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
