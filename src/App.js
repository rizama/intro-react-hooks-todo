import React, { useState } from 'react';

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
  const [name, setName] = useState('Sam');
  return (
    <div>
      <form>
        <label>Input Your Name</label>
        <input value={name} onChange={(event) => { 
          console.log(event.target.value) 
          setName(event.target.value)
        }} />
      </form>
      <h1>Hello {name}</h1>
    </div>
  )
};

export default App;
