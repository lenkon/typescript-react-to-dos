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
      <Droppable droppableId='TodosList'>
        {
          (provided, snapshot) => (
            <div className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
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
              {provided.placeholder}
            </div>
          )
        }        
      </Droppable>

      <Droppable  droppableId='TodosRemove'>
        {
          (provided, snapshot) => (
            <div className={`todos remove ${snapshot.isDraggingOver ? 'dragcomplete' : ''}`}  ref={provided.innerRef} {...provided.droppableProps}>
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
              {provided.placeholder}
            </div>
          )
        }        
      </Droppable>      
    </div>  
  )
};

export default ToDosList
