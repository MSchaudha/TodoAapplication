import React, {useState} from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos,complteTodo,removeTodo,updateTodo}) {
  const [edit,setEdit] = useState({
    id:null,
    value: ''
  });


  const submitUpdate = value => {
    updateTodo(edit.id,value)
    setEdit({
      id:null,
      value: ''
    })
  }
  if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  
  //map through the todos array 
  return todos.map((todo,index) => (
  <div className={todo.isComplete ? 'todo-row complte' : 'todo-row'} 
       key={index}>

        
        <div key={todo.id} onClick={() => complteTodo(todo.id)}>
          {todo.text}
        </div>
        <div className='icons'>
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)} //icon to remove item from list
            className='delete-icon' />
        
          <TiEdit 
          onClick={() => setEdit({ id:todo.id,value: todo.text})}   //icon to update the item from list
          className='edit-icon'/>
        </div>
    </div>
  
  ));
}

export default Todo
