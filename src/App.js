import React, { useState, useCallback, useEffect } from 'react';

const App = () => {
  // [default_value, function for set new value]
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value)
  }, []);

  const formSubmitted = useCallback((click) => {
    click.preventDefault()
    if(!newTodo.trim()) return;
    setTodos([
      {
        id: todos.length ? todos[0].id + 1 : 1,
        content: newTodo,
        done: false,
      },
      ...todos
    ])
    setNewTodo('');
  }, [newTodo, todos]);

  useEffect(() => {
    console.log(`todos`, todos);
  }, [todos])

  const addTodo = useCallback((todo, index) => (event) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, {
      ...todo,
      done: !todo.done
    })
    setTodos(newTodos)
  }, [todos]);

  const removeTodo = useCallback(
    (todo) => (event) => {
      setTodos(todos.filter(otherTodo => otherTodo !== todo))
    },
    [todos]
  );

  const markAll = useCallback(() => {
      const markTodos = todos.map((todo) => {
        return {
          ...todo,
          done: true
        }
      })
      setTodos(markTodos);
    },[todos]);

  return (
    <div>
      <form onSubmit={formSubmitted}>
        <label htmlFor="newTodo">Enter a Todo:</label>
        <input 
          id="newTodo"
          name="newTodo"
          value={newTodo} 
          className="input-form"
          onChange={onNewTodoChange} 
        />
        <button className="button-input">Add todo</button>
        <button className="button-input" onClick={markAll}>Mark All Done</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <input 
              className=""
              checked={todo.done}
              type="checkbox"
              onChange={addTodo(todo, index)}
            />
            <span className={todo.done ? 'done' : ''}>  {todo.content}</span>
            <button className="button-remove" onClick={removeTodo(todo)}>Remove Todo</button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default App;
