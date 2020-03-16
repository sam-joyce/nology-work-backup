import React from 'react';
import '../App/App.module.scss';
import PostList from "../../Component/PostList/PostList";

function App() {
  return (
    <div>
      <header>
        <h1>Turner Twit</h1>
      </header>
      <PostList />
    </div>
  );
}

export default App;
