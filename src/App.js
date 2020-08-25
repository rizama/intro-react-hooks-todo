import React, { useState, useCallback, useEffect } from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello React!</h1>
//     </div>
//   );
// }

// const App = () => (
//   <div>
//     <h1>Hello React!</h1>
//   </div>
// );

const App = () => {
  // [default_value, function for set new value]
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  
  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value)
  }, []);

  const formSubmitted = useCallback((click) => {
    click.preventDefault()
    setTodos([...todos,
      {
        id: todos.length + 1,
        content: newTodo,
        done: false,
      }
    ])
    setNewTodo('');
  }, [newTodo, todos]);

  useEffect(() => {
    console.log(`todos`, todos);
  }, [todos])

  return (
    <div>
      <form onSubmit={formSubmitted}>
        <label htmlFor="newTodo">Enter a Todo:</label>
        <input 
          id="newTodo"
          name="newTodo"
          value={newTodo} 
          onChange={onNewTodoChange} 
        />
        <button>Add todo</button>
      </form>
    </div>
  )
};

export default App;
