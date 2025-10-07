import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const fetchTodos = async () => {
    const { data } = await axios.get('/api/todos', config);
    setTodos(data);
  };

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
    fetchTodos();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!text) return;
    await axios.post('/api/todos', { text }, config);
    setText('');
    fetchTodos();
  };

  const toggleComplete = async (todo) => {
    await axios.put(`/api/todos/${todo._id}`, { ...todo, completed: !todo.completed }, config);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`, config);
    fetchTodos();
  };

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Todos</h1>
        <button onClick={logoutHandler} className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
      </div>
      <form onSubmit={addTodo} className="mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Add a new todo"
        />
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo._id}
            className={`flex justify-between items-center p-2 mb-2 border rounded ${
              todo.completed ? 'bg-green-200' : ''
            }`}
          >
            <span
              onClick={() => toggleComplete(todo)}
              className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)} className="px-2 py-1 bg-red-500 text-white rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosPage;
