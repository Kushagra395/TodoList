 
 import { useState, useEffect } from 'react';
 import './App.css';
 import { Todoprovider } from './context/Todocontext';
 import TodoForm from './components/TodoForm';
 import TodoIteam from './components/TodoIteam';
 
 export default function App() {
   const [Todos, setTodos] = useState(() => {
     // Load initial todos from localStorage
     try {
       const savedTodos = JSON.parse(localStorage.getItem("todos"));
       return Array.isArray(savedTodos) ? savedTodos : [];
     } catch {
       return [];
     }
   });
 
   const addTodo = (todo) => {
     setTodos((prev) => {
       const updatedTodos = [...prev, { id: Date.now(), ...todo }];
       localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Save to localStorage
       return updatedTodos;
     });
   };
 
   const updateTodo = (id, todo) => {
     setTodos((prev) => {
       const updatedTodos = prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo));
       localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Save to localStorage
       return updatedTodos;
     });
   };
 
   const deleteTodo = (id) => {
     setTodos((prev) => {
       const updatedTodos = prev.filter((prevtodo) => prevtodo.id !== id);
       localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Save to localStorage
       return updatedTodos;
     });
   };
 
   const toggleComplete = (id) => {
     setTodos((prev) => {
       const updatedTodos = prev.map((prevtodo) => prevtodo.id === id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo);
       localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Save to localStorage
       return updatedTodos;
     });
   };
 
   return (
     <Todoprovider value={{ Todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
       <div className="bg-[#172842] min-h-screen py-8">
         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
           <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
           <div className="mb-4">
             <TodoForm />
           </div>
           <div className="flex flex-wrap gap-y-3">
             {Todos.map((todo) => (
               <div key={todo.id} className='w-full'>
                 <TodoIteam todo={todo} />
               </div>
             ))}
           </div>
         </div>
       </div>
     </Todoprovider>
   );
 }
 