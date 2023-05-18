import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

const todos = [
  {
    id: 1,
    todoText: "Sample Todo 1",
    isDone: false
  },
  {
    id: 2,
    todoText: "Sample Todo 2",
    isDone: false
  },
  {
    id: 3,
    todoText: "Sample Todo 3",
    isDone: false
  }
]


function App() {

  const [data, setData] = useState(todos);

const inputRef = useRef(null)

  const addTodo = () => {
    setData([...data, {
      id: 4,
      todoText: inputRef.current.value,
      isDone: false
      }
    ])
    // console.log(JSON.stringify(todos))
  }


  return (
    <div className="App">
      <div>
        <header>Todo App</header>
        <input type='text' placeholder='Enter Todo' ref={inputRef} ></input>
        <input type='button' value='Add' onClick={addTodo}></input>
      </div>
      <div>
        {
          data.map((todoSingleElement,i) => {
            return (
              <div key={i}>
                <span>{todoSingleElement.todoText}</span>
              </div>
            )
          })
        }
      </div>
    </div>

  );
}

export default App;
