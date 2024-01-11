import React from 'react';
// rafce
import { Todo } from '../model';
import "./styles.css";
import SingleTodos from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd'

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
  // return (    
  //   <div className="container">
  //     <Droppable droppableId='TodosActive'>
  //       {
  //         (provided, snapshot) => (
  //           <div className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
  //             <span className="todos-heading">
  //               Active Tasks
  //             </span>
  //             {
  //               list?.map((todo, index) =>(
  //                 <SingleTodos 
  //                   index={index}
  //                   todo={todo} 
  //                   key={todo.id}
  //                   list={list}
  //                   setList={setList}
  //                 />
  //               ))
  //             }
  //             {provided.placeholder}
  //           </div>
  //         )
  //       }        
  //     </Droppable>

  //     <Droppable  droppableId='TodosRemove'>
  //       {
  //         (provided, snapshot) => (
  //           <div className={`todos ${snapshot.isDraggingOver ? 'dragcomplete' : 'remove'}`}  ref={provided.innerRef} {...provided.droppableProps}>
  //             <span className="todos-heading">
  //               Completed Tasks
  //             </span>
  //             {
  //               completedTodos?.map((todo, index) =>(
  //                 <SingleTodos 
  //                   index={index} 
  //                   todo={todo} 
  //                   key={todo.id}
  //                   list={completedTodos}
  //                   setList={setCompletedTodos}                    
  //                 />
  //               ))
  //             }
  //             {provided.placeholder}
  //           </div>
  //         )
  //       }        
  //     </Droppable>      
  //   </div>  
  // )


  return (
    <div className="container">
      <Droppable droppableId="Active">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos-heading">Active Tasks</span>
            {todos?.map((todo, index) => (
              <SingleTodos
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          >
            <span className="todos-heading">Completed Tasks</span>
            {completedTodos?.map((todo, index) => (
              <SingleTodos
                index={index}
                todos={completedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );

};

export default TodoList
