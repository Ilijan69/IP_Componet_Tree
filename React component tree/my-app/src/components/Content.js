import React from 'react';
import PostList from './PostList';

const Content = (props) => {
  return (
    <section>
      <PostList posts={props.posts} />
    </section>
  );
};

export default Content;
