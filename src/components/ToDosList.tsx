import React from 'react'
// rafce
import { Todos } from '../model';
import "./styles.css";
import SingleTodos from './SingleTodos';

interface Props {
  list: Todos[];
  setList: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const ToDosList: React.FC<Props> = ({list, setList}) => {
  return (
    <div className='todos'>
      {
        list.map((todo) =>(
          // <li>{todo.todos}</li>
          <SingleTodos 
            todo={todo} 
            key={todo.id}
            list={list}
            setList={setList}
          />
        ))
      }
    </div>
  )
}

export default ToDosList
