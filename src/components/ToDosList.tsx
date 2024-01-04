import React from 'react'
// rafce
import { Todos } from '../model';

interface Props {
  list: Todos[];
  setList: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const ToDosList: React.FC<Props> = ({list, setList}) => {
  return (
    <div>
      {
        list.map((todo) =>(
          <li>{todo.todos}</li>
        ))
      }
    </div>
  )
}

export default ToDosList
