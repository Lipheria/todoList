import React from 'react'
import { useState } from 'react'
import Form from "../components/Form"
import { RiCloseCircleLine, RiCheckFill } from "react-icons/ri"
import { TiEdit } from "react-icons/ti"
// import Todo from './Todo'
// import TodoForm from './TodoForm'

//This file gets those items from the array and displays them
//in a list


function TodoListDisplayer({ item, removeTodo, completeTodo, completeTodo2}) {

  const [done, setDone] = useState(false);
  const handleClick = () => setDone(!done);

     
  return (
    /*item is a prop that is gotten from the app
    component. It references the object in the addToDo function*/
    <div className={done ? 'todo-row complete' : "todo-row"}>
        {item.text}
        <div className="icons">
        <RiCloseCircleLine onClick={()=>removeTodo(item.id)} className="delete-icon"/>
        <RiCheckFill 
        onClick={() => {completeTodo2(item.id); handleClick();}}
        className="edit-icon"/>
        </div>
    </div>
  )
}

export default TodoListDisplayer

// function TodoListDisplayer() {
//     const[todos, setTodos] = useState([])

//     const addTodo = todo =>{
//         if(!todo.text || /^\s*$/.test(todo.text)){
//             return;
//         }

//         const newTodos = [todo, ...todos]

//         setTodos(newTodos);
//         console.log(...todos);
//     }

    
//     const updateTodo = (todoId, newValue) => {
//         if(!newValue.text || /^\s*$/.test(newValue.text)){
//             return;
//         }
//          setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
//          );
//     }

//     const removeTodo = id => {
//         const removeArr = [...todos].filter(todo => todo.id!==id)
//         setTodos(removeArr)
//     }


//     const completeTodo = id =>{
//         let updatedTodos = todos.map(todo => {
//             if (todo.id === id){
//                 todo.isComplete = !todo.isComplete
//             }
//             return todo
//         })

//         setTodos(updatedTodos);
//     }

//     return (
//         <>
//             <h1>What are you doing today</h1>
//             <TodoForm onSubmit={addTodo}/>
//             <Todo 
//             todos={todos} 
//             completeTodo={completeTodo} 
//             removeTodo={removeTodo}
//             updateTodo={updateTodo}  />
//         </>
//     )
// }

// export default TodoListDisplayer
