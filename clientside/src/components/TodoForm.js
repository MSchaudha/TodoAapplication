import React, {useState} from 'react'

function TodoForm(props) {
  //state to hold the value of the new to-do item
  const [input,setInput]=useState('');

  const handleChange = e =>{
    setInput(e.target.value);
  }
  const handleSubmit = e =>{
    e.preventDefault();
    
    props.onSubmit({
      id:Math.floor(Math.random() * 10000),
      text: input
    });
    //clear input field
    setInput("");
  }
  return (
   <form className='todo-form' onSubmit={handleSubmit}>
   
    <input type="text" // //Input field for new item
           placeholder="add a todo" 
           value={input}
           name="text"
           className="todo-input"
           onChange={handleChange}
    />
    <button className="todo-button">Add todo</button> 
   </form>
  );
}

export default TodoForm;
