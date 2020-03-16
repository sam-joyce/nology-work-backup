import React from 'react';
import TodoList from "../Components/TodoList/TodoList";

function App() {
  const state = {
    todos: []
  }
  return (
    <TodoList />
  );
}

export default App;
