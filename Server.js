//Import Express.js and CORS middleware
const express = require('express'); 
const cors = require('cors');

//create express application 
const app = express();
const port = 3001;
//Enable CORS to allow communication with the front-end
app.use(cors());
app.use(express.json());

//In-memory array to store to-do item
let todos = [];
let id = 1;


app.get('/api/todos', (req, res) => {
  res.json(todos); //Send the to-do items as aJSON response
});
//Endpoints to add new to-do item
app.post('/api/todos', (req, res) => {
  const newTodo = { id: id++, ...req.body };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});
//Endpoints to update new to-do item
app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(todo => todo.id == id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...req.body };
    res.json(todos[index]);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});
//Endpoints to delete new to-do item
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id != id);
  res.status(204).end();
});

//start server on port 3001
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});