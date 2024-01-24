import React, { useEffect, useRef, useState, useReducer } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from 'react-beautiful-dnd';

import TodoReducer from '../model';

type Actions = 
| { type: 'add', payload: string }
| { type: 'remove', payload: number }
| { type: 'done', payload: number }
| { type: 'edit', payload: { id: number; todo: string } };

type Props = {
  index: number;  
  todo: Todo;
  todos: Todo[];
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  // setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  // setTodos: (value: Actions) => void;
  dispatch: (value: Actions) => void;
}

// const SingleTodos = ({ index, todo, todos, setTodos }: Props) => {
const SingleTodos = ({ index, todo, todos, dispatch }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  // const [state, dispatch] = useReducer(TodoReducer, []);
  // const [state, dispatch] = useReducer(TodoReducer, todos); // Use a different name for the state variable

  const handleDone = (id: number) => {
    // setTodos(
    //   todos.map((el) => 
    //     el.id === id ? { ...el, isDone: !el.isDone } : el
    //   )
    // );
    dispatch({ type: "done", payload: id });
  };

  const handleDelete = (id: number) => {
    // setTodos(
    //   todos.filter((el) => el.id !== id)
    // );
    dispatch({ type: "remove", payload: id });    
    // setTodos(state);
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    // setTodos(todos.map((el) => (
    //   el.id === id ? {...el, todo: editTodo } : el
    // )));

    setEdit(false);
  };
  
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   inputRef.current?.focus();
  // }, [edit]);
    
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {
        (provided, snapshot) => (
          <form className={`todos-single ${snapshot.isDragging ? 'drag' : ''}`} 
            onSubmit={(e) => handleEdit(e, todo.id)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
            {
              edit ? (
                <input 
                  ref={inputRef}
                  value={editTodo} 
                  onChange={(e) => setEditTodo(e.target.value)} 
                  className='todos-single--text'/>
              ) : 
                todo.isDone ? (
                  <s className='todos-single--text'>{ todo.todo }</s>
                ) : (
                  <span className='todos-single--text'>{ todo.todo }</span>
                )        
            }
            
            <div>
              <span className="icon" onClick={() => {
                if(!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}>
                <AiFillEdit />
              </span>
              <span className="icon" onClick={() => handleDelete(todo.id)}>< AiFillDelete /></span>
              <span className="icon" onClick={() => handleDone(todo.id)}>< MdDone /></span>
              
            </div>
          </form>
        )
      }      
    </Draggable>
  );
};

export default SingleTodos
