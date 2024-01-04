import React from 'react'
import { Todos } from '../model'

type Props = {
  todo: Todos;
  list: Todos[];
  setList: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const SingleTodos = ({ todo, list, setList }: Props) => {
  return (
    <div>
      
    </div>
  )
}

export default SingleTodos
