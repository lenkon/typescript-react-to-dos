import React from 'react';
import { Todo } from '../model';
import "./styles.css";
import SingleTodo from './SingleTodo';
import { StrictModeDroppable as Droppable } from '../helpers/StrictModeDroppable';

type Actions = 
| { type: 'add', payload: string }
| { type: 'remove', payload: number }
| { type: 'done', payload: number }
| { type: 'edit', payload: { id: number; todo: string } };

interface Props {
  todos: Todo[];
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  dispatch: (value: Actions) => void;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, dispatch, completedTodos, setCompletedTodos}) => {
  
  return (
    <div className="container">
      <Droppable droppableId="List">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos-heading">Active Tasks</span>
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                dispatch={dispatch}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="ListRemove">
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
              <SingleTodo
                index={index}
                todos={completedTodos}
                todo={todo}
                key={todo.id}
                dispatch={dispatch}
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
