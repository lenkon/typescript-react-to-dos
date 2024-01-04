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
  return (
    <form className='todos-single'>
      <span className='todos-single--text'>
        { todo.todos }
      </span>
      <div>
        <span className="icon"><AiFillEdit /></span>
        <span className="icon">< AiFillDelete /></span>
        <span className="icon">< MdDone /></span>
        {/* span.icon */}
      </div>
    </form>
  )
}

export default SingleTodos
