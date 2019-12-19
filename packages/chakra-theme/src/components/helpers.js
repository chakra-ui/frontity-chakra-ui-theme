function getSrcSet(media) {
  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map(item => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;
  return srcset;
}

export function getMediaAttributes(state, id) {
  const media = state.source.attachment[id];
  if (!media) return {};

  const srcSet = getSrcSet(media);

  return {
    alt: media.title.rendered,
    src: media.source_url,
    srcSet
  };
}

export function getPostCategories(state, post) {
  const allCategories = state.source.category;
  const categories =
    post.categories && post.categories.map(catId => allCategories[catId]);
  return categories.filter(Boolean);
}

export function getPostAuthor(state, post) {
  return state.source.author[post.author];
}

export function getPostTags(state, post) {
  const allTags = state.source.tag;
  const tags = post.tags && post.tags.map(tagId => allTags[tagId]);
  return tags.filter(Boolean);
}

export function getPostImageProps(state, post) {
  return getMediaAttributes(state, post.featured_media);
}

export function formatPostData(state, post) {
  return {
    id: post.id,
    author: getPostAuthor(state, post),
    publishDate: post.date,
    title: post.title.rendered,
    categories: getPostCategories(state, post),
    tags: getPostTags(state, post),
    link: post.link,
    featured_media: getPostImageProps(state, post),
    content: post.content.rendered,
    excerpt: post.excerpt.rendered
  };
}

export function splitPosts(state, routeData) {
  const firstThreePosts = [];
  const otherPosts = [];

  routeData.forEach((item, idx) => {
    const itemData = state.source[item.type][item.id];
    if (idx < 3) firstThreePosts.push(itemData);
    else otherPosts.push(itemData);
  });

  return [firstThreePosts, otherPosts];
}

export function omitConnectProps(props) {
  const out = {};
  const propsToOmit = [
    "state",
    "actions",
    "roots",
    "fills",
    "libraries",
    "getSnapshot"
  ];
  for (const prop in props) {
    if (!propsToOmit.includes(prop)) {
      out[prop] = props;
    }
  }
  return out;
}
