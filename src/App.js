import React, { useState, useCallback } from 'react';

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
  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value)
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="newTodo">Enter a Todo:</label>
        <input 
          id="newTodo"
          name="newTodo"
          value={newTodo} 
          onChange={onNewTodoChange} 
        />
      </form>
      <h1>Todo: {newTodo}</h1>
    </div>
  )
};

export default App;
