import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todos } from './model';
import ToDosList from './components/ToDosList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [todos, setTodos] = useState<string>("");
  const [list, setList] = useState<Todos[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todos[]>([]);

  // const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
  // const handleAdd = (e: React.SyntheticEvent) => {
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todos) {
      setList([...list, {id: Date.now(), todos, isDone: false}]);
      // Empty the input field
      setTodos("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    // console.log(result);
    const { source, destination } = result;

    if(!destination) return;

    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add, 
      active = list,
      complete = completedTodos;

    if(source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if(destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);      
    } else {      
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setList(active);

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className='heading'>To Dos</span>
        <InputField todos={todos} setTodos={setTodos} handleAdd={handleAdd}/>      
        <ToDosList list={list} setList={setList} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>        
      </div>
    </DragDropContext>
  );
};

export default App;
