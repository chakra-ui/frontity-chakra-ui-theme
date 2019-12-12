import { connect } from "frontity";
import React from "react";

const SearchResults = ({ state, libraries }) => {
  // Get the current path or link
  const currentPath = state.router.link;

  // Get the total pages that match the current path/url
  const { total } = state.source.data[currentPath];
  const isEmpty = total === 0;

  // Parse to current url to get the search query
  const parse = libraries.source.parse(state.router.link);

  // Parse returns an object whose query string is stored in "s"
  const searchQuery = parse.query["s"];

  // Since we formatted the query string in the search modal, let's reverse the formatting
  const reverseFormat = query => query.replace("+", " ");

  return (
    <>
      <h1>
        <span>{`“${reverseFormat(searchQuery)}”`}</span>
        <div>
          {isEmpty ? (
            <p>
              We could not find any results for your search. You can give it
              another try through the search form below.
            </p>
          ) : (
            <p>
              We found {total} {total === 1 ? "result" : "results"} for your
              search.
            </p>
          )}
        </div>
      </h1>

      {isEmpty ? (
        <div>
          <div>Show search form here</div>
        </div>
      ) : (
        <div showExcerpt={true} showMedia={false}>
          result goes here
        </div>
      )}
    </>
  );
};

export default connect(SearchResults);
