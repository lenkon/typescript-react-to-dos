import React from 'react'  
// rafce

const InputField = () => {
  return (
    <form className='input'>
      <input type='input' placeholder='Enter a task' className='input_box'></input>
      <button className='input_button' type='submit'>Go</button>
    </form>
  )
}

export default InputField
