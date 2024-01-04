import React from 'react';
import { Todos } from '../model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todos;
  list: Todos[];
  setList: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const SingleTodos = ({ todo, list, setList }: Props) => {
  const handleDone = (id: number) => {
    setList(
      list.map((el) => 
        el.id === id ? { ...el, isDone: !el.isDone } : el
      )
    );
  };

  return (
    <form className='todos-single'>
      {
        todo.isDone ? (
          <s className='todos-single--text'>{ todo.todos }</s>
        ) : (
          <span className='todos-single--text'>{ todo.todos }</span>
        )
      }
      
      <div>
        <span className="icon"><AiFillEdit /></span>
        <span className="icon">< AiFillDelete /></span>
        <span className="icon" onClick={() => handleDone(todo.id)}>< MdDone /></span>
        {/* span.icon */}
      </div>
    </form>
  )
}

export default SingleTodos
