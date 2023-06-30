import React from 'react';

const Blog = () => {
  // Generate filler blog article links
  const articles = new Array(100).fill(null).map((_, i) => <div>`Article {i + 1}`</div>);

  return (
    <>
        <h1>Blog</h1>
        {articles}
    </>
  );
};

export default Blog;