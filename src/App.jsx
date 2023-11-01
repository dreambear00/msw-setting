import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (index) => {
    setIsEditing(index);
    setEditValue(todo[index]);
  };

  const handleSave = (index) => {
    setTodo(prevTodo => {
      const updatedTodos = [...prevTodo];
      updatedTodos[index] = editValue;
      return updatedTodos;
    });
    setIsEditing(null);
    setEditValue('');
  };

  const AddTodo = () => {
    if (input) {
      setTodo(prevTodo => prevTodo.concat(input));
      setInput('');
    }
  };

  const DeleteTodo = (index) => {
    setTodo(prevTodo => {
      return prevTodo.slice(0, index).concat(prevTodo.slice(index + 1));
    });
  };

  return (
    <div className="App">
        <div className="todoImage">
          <img src="./img/rabbit2.png" alt="Todo Image" />
        </div>
        <h1>To Do List</h1>
        <form onSubmit={e => {
          e.preventDefault();
          AddTodo();
        }}>
          <input
            type="text" value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="입력해주세요"
          />
          <button type="submit">+</button>
        </form>

        <ul>
          {todo.map((todoItem, index) => (
            <li key={index}>
              {isEditing === index ? (
                <>
                  <input
                    className="edit"
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    onBlur={() => handleSave(index)}
                    onKeyPress={e => {
                      if (e.key === 'Enter') handleSave(index);
                    }}
                  />
                  <button onClick={() => handleSave(index)}>저장</button>
                </>
              ) : (
                <>
                  <span className="editListSpan">
                    <a href="#" className="editListA" onClick={e => {

                      e.preventDefault();
                      handleEdit(index);
                    }}>
                      {todoItem}
                    </a>
                  </span>
                  <button onClick={() => DeleteTodo(index)}>-</button>
                </>
              )}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;




// 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;