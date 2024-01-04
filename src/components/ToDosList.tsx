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
      
    </div>
  )
}

export default ToDosList
