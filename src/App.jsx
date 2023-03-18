import React, { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

const App = () => {

  // state
  const [inputText , setInputText] = useState('');
  const [todos , setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtered , setFiltered] = useState([]);

    // useeffect

    useEffect(()=>{
      filterHandler();
    },[todos , status])


  // functions
  const filterHandler=()=>{
    switch(status){
      case 'completed' :
        setFiltered(todos.filter((todo)=>todo.completed === true))
        break;
        case 'uncompleted' : setFiltered(todos.filter((todo)=>todo.completed === false))
        break;
        default : setFiltered(todos)
        break;

    }
  };


 







  return (
    <div>
      <header>
        Mohammed's Todo List
      </header>
      <Form todos={todos} setInputText={setInputText} inputText={inputText} setTodos={setTodos} status={status} setStatus={setStatus} />
      <TodoList filtered={filtered} todos={todos}  setTodos={setTodos}/>
    </div>
  )
}

export default App