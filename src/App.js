import './App.css';
import { useState } from "react";
import TodoListDisplayer from './components/TodoListDisplayer';
import Header from "./components/header"
import Form from './components/Form';
import uuid from 'react-uuid';


function App() {
     
       let idTest = 1;
       
       //Keep track of items in to do list
       const [toDoItems, setToDoItems] = useState([]);

       /*Function that pushes a text object into an array*/
       const addToDo = (text) =>{
              let id = uuid()
              /*toDoItem takes the user text  input and gives it 
              an ID and a completed status*/
              let toDoItem = {
                     id: id,
                     text: text,
                     completed: false
              }
              let newToDo = ([toDoItem, ...toDoItems])
              setToDoItems(newToDo)
              //console.log(newToDo)
       }

       const removeTodo = (idTest) => {
              //console.log(id)
              /*takes the current array state then 
              filters each item*/
              /*idTest is a random variable that will never be 
              equal to the id of each to do item so all items will always
              be filtered out*/
              let updatedTodos = [...toDoItems].filter((item) => item.id !== idTest)
              setToDoItems(updatedTodos) 
       }

       const completeTodo = (id) => {
              /*toDoItem takes the user text  input and gives it 
              an ID and a completed status*/
              let completedTodo = [...toDoItems].map((item) => item.completed = !item.completed)
              //let newToDo = ([item, ...toDoItems])
              //console.log("egg")
              setToDoItems(completedTodo)
              console.log(completedTodo)
       }

       /* id  varibale gets the id of each item in the array
       it then checks if it exists then sets the completed status to true */
       const completeTodo2 = (id) => {
              let completedTodo = [...toDoItems].map((item) =>{
                     if(item.id === id){
                            item.completed = !item.completed
                     }
                     return toDoItems
              })
              console.log(completedTodo)
       }


 return(
 <div className = 'todo-app'>
       <Header/>
       <Form
              addToDo = {addToDo}
       />
       {toDoItems.map((item => {
              /*for each item in toDoItems array display the displayer
             */
              return(<TodoListDisplayer removeTodo = {removeTodo} completeTodo2 = {completeTodo2} completeTodo = {completeTodo} item = {item} key={item.id}/>)
       }))}
       {/* <TodoListDisplayer/> */}
 </div>
 )

}

export default App;
