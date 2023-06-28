import React from 'react';

const Blog = () => {
  // Generate filler blog article links
  const articles = new Array(100).fill(null).map((_, i) => <a>`Article {i + 1}`</a>);

  return (
    <>
        <h1>Blog</h1>
        {articles}
    </>
  );
};

export default Blog;