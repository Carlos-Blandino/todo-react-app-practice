import TodoCard from "./components/TodoCard";
import React from "react";
function App() {
    const title = "My Todo";
  return (
    <div>
        <h1>My Todos</h1>
        <TodoCard title={title}/>
    </div>
  );
}

export default App;
