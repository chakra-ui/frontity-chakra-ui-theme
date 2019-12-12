import { useRef } from "react";

const useSearch = ({ state, actions, libraries }) => {
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];
  const { closeSearchModal } = actions.theme;

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
      actions.router.set(`/?s=${searchString.toLowerCase()}`);

      // Scroll the page to the top
      window.scrollTo(0, 0);

      // Close the search modal
      closeSearchModal();
    }
  };

  return {
    form: {
      role: "search",
      "aria-label": "Search this blog",
      onSubmit
    },
    input: {
      defaultValue: searchQuery,
      ref: inputRef
    }
  };
};

export default useSearch;
