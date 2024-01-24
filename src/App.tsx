import React, { useState, useReducer, useEffect } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoReducer, { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [state, dispatch] = useReducer(TodoReducer, []);
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  
  // useEffect(() => {
  //   setTodos(state);
  // }, [state]);

  // const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
  // const handleAdd = (e: React.SyntheticEvent) => {
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      // setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      dispatch({ type: "add", payload: todo });
      // setTodos(state);
      // Empty the input field
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    // let active = todos;
    let active = state;
    let complete = completedTodos;
    // Source Logic
    if (source.droppableId === "List") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "List") {
      active.splice(destination.index, 0, add);
    } else if (destination.droppableId === "ListRemove") {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    // setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">To Dos</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={state}
          dispatch={dispatch}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
