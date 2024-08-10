import React, {useState} from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
  const [todos,setTodos] = useState([]);
  
  //add item to list
  const addTodo = todo =>{
    if(!todo.text || /^\$%/.test(todo.text)){
      return;
    }

    const newTodods = [todo,...todos];
    
    setTodos(newTodods);
   // console.log(...todos);
  };


  //update the item
  const updateTodo = (todoId,newValue) => {
    if(!newValue.text || /^\$%/.test(newValue.text)) {
      return;
    }
   setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
  );

  }
  //remove item
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr);
  };
  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplte = !todo.isComplete
      }
      return todo;
    })
    setTodos(updateTodos);
  }
  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo= {removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList
