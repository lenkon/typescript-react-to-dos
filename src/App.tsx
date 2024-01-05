import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todos } from './model';
import ToDosList from './components/ToDosList';
import { DragDropContext } from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [todos, setTodos] = useState<string>("");
  const [list, setList] = useState<Todos[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todos[]>([])

  // const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
  // const handleAdd = (e: React.SyntheticEvent) => {
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todos) {
      // setTodosList([...todosList, {id: Date.now(), todos: todos, isDone: false}])
      setList([...list, {id: Date.now(), todos, isDone: false}]);
      // Empty the input field
      setTodos("");
    }
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className='heading'>To Dos</span>
        <InputField todos={todos} setTodos={setTodos} handleAdd={handleAdd}/>      
        {
          // list.map((e) => (
          //   <><li>{e.todos}</li><li>{e.id}</li></>          
          // ))
        }
        <ToDosList list={list} setList={setList} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
      </div>
    </DragDropContext>
  );
};

export default App;
