import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../post/featured-media";
import { Heading } from "@chakra-ui/core";

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article>
      <Link link={item.link}>
        <Heading dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      <div>
        {author && (
          <StyledLink link={author.link}>
            <Author>
              By <b>{author.name}</b>
            </Author>
          </StyledLink>
        )}
        <Fecha>
          {" "}
          on <b>{date.toDateString()}</b>
        </Fecha>
      </div>
      {state.theme.featured.showOnArchive && (
        <FeaturedMedia id={item.featured_media} />
      )}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </article>
  );
};

export default connect(Item);

const Author = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Fecha = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
