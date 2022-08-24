import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
      <>
        <h1>My Todos</h1>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
  };
  
  export default memo (Todos) ;