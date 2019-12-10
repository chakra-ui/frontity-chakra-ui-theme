import { Box } from "@chakra-ui/core";
import Image from "@frontity/components/image";
import { connect } from "frontity";
import React from "react";

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

const FeaturedMedia = ({ state, id }) => {
  const media = state.source.attachment[id];
  if (!media) return null;
  const srcSet = getSrcSet(media);

  return (
    <Box mt={4} height="300px">
      <Box
        as={Image}
        size="100%"
        objectFit="cover"
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcSet}
      />
    </Box>
  );
};

export default connect(FeaturedMedia);
