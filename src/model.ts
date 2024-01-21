import { useReducer } from "react";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

type Actions = 
| { type: 'add', payload: string }
| { type: 'remove', payload: number }
| { type: 'done', payload: number }

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false }
      ];

    case "remove":
      return state.filter((el) => el.id !== action.payload);

    case "done":
      return state.map((el) => 
        el.id === action.payload ? { ...el, isDone: !el.isDone } : el
    );

    default:
      return state;
  }
}

export default TodoReducer;

// const [state, dispatch] = useReducer(TodoReducer,[]);


// const ReducerExample = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ReducerExample;
