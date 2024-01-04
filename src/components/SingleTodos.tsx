import React from 'react'
import { Todos } from '../model'

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
    </form>
  )
}

export default SingleTodos
