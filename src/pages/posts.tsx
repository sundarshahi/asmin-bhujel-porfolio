import React from 'react';
import Container from 'Atoms/Container';
import SEO from 'Molecules/Seo';
import Posts from 'Molecules/Posts';

const PostPage = () => (
  <Container>
    <SEO title="Post" />
    <Posts />
  </Container>
);

export default PostPage;
