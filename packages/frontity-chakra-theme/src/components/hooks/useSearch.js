import { useRef } from "react";

const useSearch = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef();

  const onSubmit = event => {
    // Prevent page navigation
    event.preventDefault();

    // Get the input's value
    const searchString = inputRef.current.value;

    // If the typed search string is not empty
    // Better to trim write spaces as well
    if (searchString.trim().length > 0) {
      // Let's go search for blogs that match the search string
      actions.router.set(
        `${state.source.postsPage}?s=${searchString.toLowerCase()}`
      );

      // Scroll the page to the top
      window.scrollTo(0, 0);

      // Close the search modal
      actions.theme.closeSearchModal();
    }
  };

  return {
    form: {
      role: "search",
      "aria-label": "Search this blog",
      onSubmit
    },
    input: {
      defaultValue: data.searchQuery && data.searchQuery.replace(/\+/g, " "),
      ref: inputRef
    }
  };
};

export default useSearch;
