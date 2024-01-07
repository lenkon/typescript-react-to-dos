import React from 'react';
// rafce
import { Todos } from '../model';
import "./styles.css";
import SingleTodos from './SingleTodos';
import { Droppable } from 'react-beautiful-dnd'

interface Props {
  list: Todos[];
  setList: React.Dispatch<React.SetStateAction<Todos[]>>;
  completedTodos: Todos[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const ToDosList: React.FC<Props> = ({list, setList, completedTodos, setCompletedTodos}) => {
  return (    
    <div className="container">
      <Droppable droppableId="TodosList">
        {
          (provided) => (
            <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos-heading">
                Active Tasks
              </span>
              {
                list.map((todo, index) =>(
                  <SingleTodos 
                    index={index}
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
      </Droppable>

      <Droppable  droppableId="TodosRemove">
        {
          (provided) => (
            <div className="todos remove"  ref={provided.innerRef} {...provided.droppableProps}>
              <span className="todos-heading">
                Completed Tasks
              </span>
              {
                completedTodos.map((todo, index) =>(
                  <SingleTodos 
                    index={index} 
                    todo={todo} 
                    key={todo.id}
                    list={completedTodos}
                    setList={setCompletedTodos}                    
                  />
                ))
              }
            </div>
          )
        }        
      </Droppable>      
    </div>  
  )
};

export default ToDosList
