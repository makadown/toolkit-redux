import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './api/todosApi'

export const TodoApp = () => {
  // const { data: myTodos, isLoading } = useGetTodosQuery();

  
  const [todoId, setTodoId] = useState(1);
  
  // I want to use useGetTodoByIdQuery
  const { data: mySingleTodo, isLoading } = useGetTodoByIdQuery(todoId);

  return (
    <>
        <h1>Todos RTK Query</h1>
        <hr />
        <h4> isLoading... { isLoading ? 'True' : 'False' } </h4>
        <pre>{JSON.stringify(mySingleTodo, null, 2)}</pre>

        {/* {
            myTodos && myTodos.map(({ id, title, completed }) => (
                <div key={id}>
                    <h3>{title}</h3>
                    <p>{completed ? 'Completed' : 'Not Completed'}</p>
                </div>
            ))
        } */}

        <button disabled={todoId === 1} onClick={() => setTodoId(todoId - 1)}>Prev Todo</button>
        <button onClick={() => setTodoId(todoId + 1)}>Next Todo</button>

    </>
  )
}
