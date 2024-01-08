import React, { useEffect, useRef, useState } from 'react';
import { Todos } from '../model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from 'react-beautiful-dnd';

type Props = {
  index: number;  
  todo: Todos;
  list: Todos[];
  setList: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const SingleTodos = ({ index, todo, list, setList }: Props) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todos);

  const handleDone = (id: number) => {
    setList(
      list.map((el) => 
        el.id === id ? { ...el, isDone: !el.isDone } : el
      )
    );
  };

  const handleDelete = (id: number) => {
    setList(
      list.filter((el) => el.id !== id)
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setList(list.map((el) => (
      el.id === id ? {...el, todos:editTodo } : el
    )));

    setEdit(false);
  };
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
    
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
                  <s className='todos-single--text'>{ todo.todos }</s>
                ) : (
                  <span className='todos-single--text'>{ todo.todos }</span>
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
              {/* span.icon */}
            </div>
          </form>
        )
      }
      
    </Draggable>

  )
}

export default SingleTodos
