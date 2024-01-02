import React from 'react';
import "./styles.css"
// rafce

const InputField = () => {
  return (
    <form className='input'>
      <input type='input' placeholder='Enter a task' className='input_box'></input>
      <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
