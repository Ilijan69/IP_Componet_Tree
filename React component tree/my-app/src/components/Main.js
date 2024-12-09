import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const Main = (props) => {
  return (
    <main>
      <Sidebar />
      <Content posts={props.posts} />
    </main>
  );
};

export default Main;
