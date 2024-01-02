import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string>("");
  return (
    <div className="App">
      <span className='heading'>To Dos</span>
      <InputField todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
