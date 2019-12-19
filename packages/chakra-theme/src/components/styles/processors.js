export const image = {
  // We can add a name to identify it later.
  name: "image",

  // We can add a priority so it executes before or after other processors.
  priority: 10,

  // Only process the node it if it's an image.
  test: node => node.component === "img",

  process: node => {
    // If the image is inside a <noscript> tag, we don't want to process it.
    if (node.parent.component === "noscript") return null;

    // Many WP lazy load plugins move the real "src" to "data-src", so we move it back.
    if (node.props["data-src"]) node.props.src = node.props["data-src"];
    if (node.props["data-srcset"])
      node.props.srcSet = node.props["data-srcset"];

    // We tell Html2React that it should use the <Image /> component
    // from @frontity/components, which includes lazy loading support.
    node.component = Image;

    return node;
  }
};
