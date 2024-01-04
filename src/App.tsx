import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todos } from './model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string>("");
  const [todosList, setTodosList] = useState<Todos[]>([]);

  // const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
  // const handleAdd = (e: React.SyntheticEvent) => {
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todos) {
      // setTodosList([...todosList, {id: Date.now(), todos: todos, isDone: false}])
      setTodosList([...todosList, {id: Date.now(), todos, isDone: false}]);
      // Empty input field
      setTodos("");
    }
  };

  console.log(todosList);

  return (
    <div className="App">
      <span className='heading'>To Dos</span>
      <InputField todos={todos} setTodos={setTodos} handleAdd={handleAdd}/>
      {
        todosList.map((e) => (
          <li>{e.todos}</li>
        ))
      }
    </div>
  );
};

export default App;
