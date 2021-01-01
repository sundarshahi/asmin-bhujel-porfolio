import React from 'react';
import Container from 'Atoms/Container';
import SEO from 'Molecules/Seo';
import Articles from 'Molecules/Articles';

const PostPage = () => (
  <Container>
    <SEO title="Post" />
    <Articles />
  </Container>
);

export default PostPage;
