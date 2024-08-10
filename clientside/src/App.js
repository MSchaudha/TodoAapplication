import React,{useState,useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import axios from 'axios';

const App = () => {
  
  //State to hold the list of to-do items
  const [todos, setTodos] = useState([]);
  
  // useEffect to fetch the to-do items
  useEffect(() => {
    axios.get('http://localhost:3001/api/todos')  //Fetch all to-do items from server
      .then(response =>setTodos(response.data))
      .catch(error => console.error('Error fetching todos:', error));  //Handle error
  }, []);
    
 //Function to add new item  
  const addTodo = (newTodo) => {
    axios.post('http://localhost:3001/api/todos', newTodo) //Send the new to-do item to the server
      .then(response => setTodos([...todos, response.data]))
      .catch(error => console.error('Error adding todo:', error)); //Handle error
  };
  
  //Function to update item
  const updateTodo = (id, updatedTodo) => {
    axios.put(`http://localhost:3001/api/todos/${id}`, updatedTodo) //Update the item by id
      .then(response => setTodos(todos.map(todo => (todo.id === id ? response.data : todo))))
      .catch(error => console.error('Error updating todo:', error));  //Handle error
  };
  
  //Function to delete the item
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/api/todos/${id}`) //Delete item from server
      .then(() => setTodos(todos.filter(todo => todo.id !== id)))
      .catch(error => console.error('Error deleting todo:', error));  //Handle error
  };


  return (
    <div className='todo-app'>
      <h1>Todo Item</h1>
      <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}  />
    </div>
  );
};


export default App;
