import React, { useRef } from 'react';
import "./styles.css"
// rafce

interface Props{
  todo: string; 
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

// const InputField = ({todos, setTodos}:{todos:string, setTodos:React.Dispatch<React.SetStateAction<string>>}) => {
// const InputField = ({ todos, setTodos }: Props) => {  
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => { 
  // const InputField = () => { 

  // Remove the blur on submission
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
      }}>
      <input 
        ref={inputRef}
        type='input' 
        value={todo}
        onChange={
          (e) => setTodo(e.target.value)
        }
        placeholder='Enter a task' 
        className='input_box'>

      </input>
      <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
