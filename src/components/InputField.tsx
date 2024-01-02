import React from 'react';
import "./styles.css"
// rafce

interface Props{
  todos: string; 
  setTodos: React.Dispatch<React.SetStateAction<string>>;
}

// const InputField = ({todos, setTodos}:{todos:string, setTodos:React.Dispatch<React.SetStateAction<string>>}) => {
// const InputField = ({ todos, setTodos }: Props) => {  
const InputField: React.FC<Props> = ({ todos, setTodos }) => { 
  // const InputField = () => { 
  return (
    <form className='input'>
      <input type='input' 
        value={todos}
        onChange={
          (e) => setTodos(e.target.value)
        }
        placeholder='Enter a task' 
        className='input_box'>

      </input>
      <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
